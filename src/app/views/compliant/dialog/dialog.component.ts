import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { updateLocale } from 'moment';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { CompliantserviceService } from '../compliantservice.service';
import { Docter } from '../complianttypesDto';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  formData:any;
  form:FormGroup;
  response:number
  validation=new Regexpression();
constructor(public dialogRef: MatDialogRef<DialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: { id: number, status: string, },
            private fb:FormBuilder,
            private router:Router,
            private snackBar: MatSnackBar,
            private activerouter:ActivatedRoute,
            private service:CompliantserviceService) { }

ngOnInit() {
    console.log(this.data);

    if (this.data != null) {
      switch (this.data.status) {

        case 'compliant Type':
          console.log('compliant type switch');
          this.service.getCompliantTypesById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

      }
    }
  }

      loadData(){
        setTimeout(()=>{
          this.loadForm();
      },1000);
}
  


loadForm(){
   
  this.form=this.fb.group({
      name:[this.formData.name,[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
      code:[this.formData.code,[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
  });

  }



    updateForm(){
        let masterData=new Docter();
        masterData.id=this.data.id;
        masterData.name=this.form.get('name').value;
        masterData.code=this.form.get('code').value;
        switch (this.data.status) {

          case 'School Type':
            console.log('school type switch');
            this.service.submitcomplianttype(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
        
        }

      setTimeout(()=>{
        this.dialogRef.close(this.response);
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
             message: 'Successfully Updated',
             icon: 'check_circle_outline',
            },
            duration:2000
          });
        },1500)
      }
}