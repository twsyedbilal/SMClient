import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../../administration.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SchoolDto } from '../../administration';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-school-dialog',
  templateUrl: './school-dialog.component.html',
  styleUrls: ['./school-dialog.component.scss']
})
export class SchoolDialogComponent implements OnInit {
  updateschoolForm:FormGroup;
  validation=new Regexpression();
  schoolData:SchoolDto;
  constructor(private fb:FormBuilder, 
     private adminService:AdministrationService,
     private snackBar: MatSnackBar,
     public dialogRef: MatDialogRef<SchoolDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data   
     ) { }

  ngOnInit() {

    this.adminService.getSchoolById(this.data)
    .subscribe(res=>{
      this.schoolData=res.data;
     
      this.updateschoolForm=this.fb.group({
        schoolName:[this.schoolData.schoolName,[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
        schoolCode:[this.schoolData.schoolCode,[Validators.required,Validators.pattern(this.validation.onlyNumber)]],
        schoolAddress:[this.schoolData.schoolAddress,[Validators.required]]
     
        });
      });
   }

    update(){
      let schoolData=new SchoolDto();
      schoolData.id=this.data;
      schoolData.schoolName=this.updateschoolForm.get('schoolName').value;
      schoolData.schoolCode=this.updateschoolForm.get('schoolCode').value;
      schoolData.schoolAddress=this.updateschoolForm.get('schoolAddress').value;
      this.adminService.school(schoolData).subscribe(res=>{
        console.log(res);
        if(res.code==201){
          this.dialogRef.close(res.code);
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Updated',
              icon: 'check_circle_outline',
             },
             duration:3000
          });
         
        }
      });
    }
  }