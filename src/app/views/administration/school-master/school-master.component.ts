import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import { Regexpression } from 'app/views/utils/regExp';
import { SchoolDto } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-school-master',
  templateUrl: './school-master.component.html',
  styleUrls: ['./school-master.component.scss']
})
export class SchoolMasterComponent implements OnInit {
  schoolForm:FormGroup;
  validation=new Regexpression();
  tableshow:boolean=false;
  constructor(private fb:FormBuilder, 
     private adminService:AdministrationService,
     private snackBar: MatSnackBar
     ) { }

  ngOnInit() {
  this.schoolForm=this.fb.group({
    schoolName:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
    schoolCode:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]],
    schoolAddress:['',[Validators.required]]
 
     });
  
     
 }
 public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  console.log(tabChangeEvent);
    if(tabChangeEvent.tab.textLabel=='School List'){
      this.tableshow=true;
    }else{
      this.tableshow=false;
    }
}

 submitForm(data: FormGroup, formDirective: FormGroupDirective): void{

  if(this.schoolForm.invalid){
  
    this.snackBar.openFromComponent(SnackBarMassageComponent, {
      data: {
        message: 'Enter Field required',
        icon: 'error_outline',
       },
       duration:3000
    });
  
  }else{
    let school=new SchoolDto();
    school.schoolName=this.schoolForm.get('schoolName').value;
    school.schoolCode=this.schoolForm.get('schoolCode').value;
    school.schoolAddress=this.schoolForm.get('schoolAddress').value;
    console.log(school);
    this.adminService.school(school)
    .subscribe(data=>{
      console.log(data);
      if(data.code ==201){
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Successfully Created',
            icon: 'check_circle_outline',
           },
           duration:3000
        });
       formDirective.resetForm();
       this.schoolForm.reset();
      
      }
    });
    console.log(this.schoolForm);
 
    }
  }
}
