import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import {  SchoolDto } from '../administration';
import { Regexpression } from 'app/views/utils/regExp';

@Component({
  selector: 'app-school-master',
  templateUrl: './school-master.component.html',
  styleUrls: ['./school-master.component.scss']
})
export class SchoolMasterComponent implements OnInit {
  schoolForm:FormGroup;
  validation=new Regexpression();
  constructor(private fb:FormBuilder,  private adminService:AdministrationService) { }

  ngOnInit() {
  this.schoolForm=this.fb.group({
    schoolName:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
    schoolCode:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]],
    schoolAddress:['',[Validators.required]]
 
     });
  
 }

 submitForm(){
   let school=new SchoolDto();
   school.schoolName=this.schoolForm.get('schoolName').value;
   school.schoolCode=this.schoolForm.get('schoolCode').value;
   school.schoolAddress=this.schoolForm.get('schoolAddress').value;
   console.log(school);
   this.adminService.school(school)
   .subscribe(data=>{
     console.log(data);
     if(data.code ==201){
      this.schoolForm.reset();
     }
   });
   console.log(this.schoolForm);
 }

}
