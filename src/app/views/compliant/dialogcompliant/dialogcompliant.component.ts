import { Component, OnInit, Inject } from '@angular/core';
import { CompliantserviceService } from '../compliantservice.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Master } from '../complianttypesDto';
import { Regexpression } from 'app/views/utils/regExp';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
//import { DialogComponent } from 'app/views/administration/admin-table/dialog/dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { DialogComponent } from 'app/views/administration/admin-table/dialog/dialog.component';

@Component({
  selector: 'app-dialogcompliant',
  templateUrl: './dialogcompliant.component.html',
  styleUrls: ['./dialogcompliant.component.scss']
})
export class DialogcompliantComponent implements OnInit {
  formData:any;
  form:FormGroup;
  response:number
  validation=new Regexpression();
constructor(public dialogRef: MatDialogRef<DialogcompliantComponent>,
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

        case 'Compliant Type':
          console.log('school type switch');
          this.service.getCompliantListById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
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
      remark:[this.formData.name,[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
      StudentName:[this.formData.code,[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
  
    });

  }
    updateForm(){
        let masterData=new Master();
        masterData.id=this.data.id;
        masterData.remark=this.form.get('remark').value;
        masterData.StudentName=this.form.get('StudentName').value;
        switch (this.data.status) {

          case 'Compliant Type':
            console.log('Compliant type switch');
            this.service.compliantData(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
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