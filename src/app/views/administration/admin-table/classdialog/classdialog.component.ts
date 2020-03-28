import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../../administration.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClassDto } from '../../administration';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DateFormatEnd,  } from 'app/shared/utils/dateFormat';

@Component({
  selector: 'app-classdialog',
  templateUrl: './classdialog.component.html',
  styleUrls: ['./classdialog.component.scss']
})
export class ClassdialogComponent implements OnInit {
  classForm: FormGroup;
  tableshow:boolean=false;
  resData:ClassDto;
  validation = new Regexpression();
  //dateFormatt=new DateFormatClass();
 // dateFormatt=new DateFormatEnd();
  constructor(private service: AdministrationService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:number,
    private snackBar: MatSnackBar 

  
    ) { }

  ngOnInit() {
    console.log(this.data);
    this.service.getClassDataById(this.data).subscribe(res=>{
    this.resData=res.data;
    this.classForm = this.fb.group({
      className: [this.resData.className,[Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      code: [this.resData.code, [Validators.required, Validators.pattern(this.validation.onlyNumber)]],
      fees: [this.resData.fees, [Validators.required, Validators.pattern(this.validation.onlyNumber)]],
      classsCapacity: [this.resData.classsCapacity, [Validators.required, Validators.pattern(this.validation.onlyNumber)]],
      classsType: [this.resData.classsType, [Validators.required, Validators.pattern(this.validation.onlyNumber)]],
      classsLocation: [this.resData.classsLocation, [Validators.required, Validators.pattern(this.validation.onlyNumber)]],
    classsEndingDate: [this.resData.classsEndingDate, [Validators.required, Validators.pattern(this.validation.onlyNumber)]],
     classsStartingDate: [this.resData.classsStartingDate, [Validators.required, Validators.pattern(this.validation.onlyNumber)]]

     });
  });
}

  submitClassForm(data: FormGroup, formDirective: FormGroupDirective): void {
    if(this.classForm.invalid){
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
         },
         duration:3000
      });
    
    }else{

      // let classsEndingDate:any=this.dateFormatt.getYYMMDD(this.classForm.get('classsEndingDate').value); 
      // console.log(classsEndingDate);
      let classData = new ClassDto();
      classData.id=this.data;
    classData.className = this.classForm.get('className').value;
    classData.code = this.classForm.get('code').value;
    classData.fees = this.classForm.get('fees').value;

    classData.classsCapacity = this.classForm.get('classsCapacity').value;
    classData.classsType = this.classForm.get('classsType').value;
    classData.classsLocation = this.classForm.get('classsLocation').value;
    classData.classsEndingDate = this.classForm.get('classsEndingDate').value;
    classData.classsStartingDate = this.classForm.get('classsStartingDate').value;
 
    this.service.postClass(classData)
      .subscribe(res => {
        if (res.code == 201) {
            this.dialogRef.close(res.code);
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Update',
              icon: 'check_circle_outline',
             },
             duration:3000
          });
          formDirective.resetForm();
          this.classForm.reset();
         
        }
      })

    }
    
  }


}
