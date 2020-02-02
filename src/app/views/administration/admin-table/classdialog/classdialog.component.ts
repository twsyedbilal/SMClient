import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../../administration.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClassDto } from '../../administration';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { DialogComponent } from '../dialog/dialog.component';

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
      cName: [this.resData.className,[Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      cCode: [this.resData.code, [Validators.required, Validators.pattern(this.validation.onlyNumber)]],
      cFees: [this.resData.fees, [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
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
      let classData = new ClassDto();
      classData.id=this.data;
    classData.className = this.classForm.get('cName').value;
    classData.code = this.classForm.get('cCode').value;
    classData.fees = this.classForm.get('cFees').value;
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
