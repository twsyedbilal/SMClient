import { Component, OnInit } from '@angular/core';
import { SnackBarMassageComponent } from '../snack-bar-massage/snack-bar-massage.component';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from '../utils/regExp';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { subject } from './subject.service';
import { UserData, ClassDto, SubjectDto } from './SubjectDto';
import { UserDto } from '../administration/administration';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  updateSubjectForm:FormGroup;
  validation=new Regexpression();
  tableshow:boolean=false;
  userdto:UserData[];
  classDto:ClassDto[];
  constructor(private fb:FormBuilder, 
     private subjectService:subject,
     private  snackBar: MatSnackBar
     ) { } 

  ngOnInit() {
    
  this.updateSubjectForm=this.fb.group({
    subjectName:['',[Validators.required]],
    subjectCode:['',[Validators.required]],
    semester:['',[Validators.required]],
    bookName:['',[Validators.required]],
    user:['',[]],
    classs:['',[]]
    
 
     });
     this.getDatafAll();{}
     
     
     
 }
  getDatafAll() {
    this.subjectService.findAllUser().subscribe(res=>{this.userdto=res.data;});
    this.subjectService.findAllClass().subscribe(res=>{this.classDto=res.data;});

      console.log(this.userdto);
      console.log(this.classDto);
    
    
  }
 public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  console.log(tabChangeEvent);
    if(tabChangeEvent.tab.textLabel=='Subject List'){
      this.tableshow=true;
    }else{
      this.tableshow=false;
    }
}

 submitForm(data: FormGroup, formDirective: FormGroupDirective): void{

  if(this.updateSubjectForm.invalid){
  
    this.snackBar.openFromComponent(SnackBarMassageComponent, {
      data: {
        message: 'Enter Field required',
        icon: 'error_outline',
       },
       duration:3000
    });
   
  }else{ 
    let subject=new SubjectDto();
    subject.subjectName=this.updateSubjectForm.get('subjectName').value;
    subject.subjectCode=this.updateSubjectForm.get('subjectCode').value;
    subject.semester=this.updateSubjectForm.get('semester').value;
    subject.bookName=this.updateSubjectForm.get('bookName').value;
    subject.userId=this.updateSubjectForm.get('user').value;
    subject.classsId=this.updateSubjectForm.get('classs').value;
    console.log(subject);
    this.subjectService.SubjectData(subject)
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
       this.updateSubjectForm.reset();
      
      }
    });
    console.log(this.updateSubjectForm);
 
    }
  }
}