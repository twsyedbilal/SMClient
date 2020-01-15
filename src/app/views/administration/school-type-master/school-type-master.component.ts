import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { SchoolTypeDto } from '../administration';
import { AdministrationService } from '../administration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-school-type-master',
  templateUrl: './school-type-master.component.html',
  styleUrls: ['./school-type-master.component.scss']
})
export class SchoolTypeMasterComponent implements OnInit {
    id:number;
    schoolType:FormGroup;
    validation=new Regexpression();
  constructor(private fb:FormBuilder,
              private router:Router,
              private snackBar: MatSnackBar,
              private activerouter:ActivatedRoute,
              private service:AdministrationService) { }

  ngOnInit() {
    this.activerouter.queryParams
     .subscribe(x=>{
      console.log(x);
      this.id=x.id;
      console.log(this.id);
    });
    console.log(this.id);
   
    if(this.id !=undefined){
      this.service.getSchoolTypeById(this.id)
      .subscribe(res=>{
        console.log(res);
        this.schoolType=this.fb.group({
          schoolTypeName:[res.data.schoolTypeName,[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
          schoolCode:[res.data.code,[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
        });
       
      })
    }
      else{
       this.schoolType=this.fb.group({
      schoolTypeName:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
      schoolCode:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
    });
  }

   
   }

  submitForm(){
   let schooltype=new SchoolTypeDto();
   schooltype.schoolTypeName=this.schoolType.get('schoolTypeName').value; 
   schooltype.code=this.schoolType.get('schoolCode').value;  
    if(this.id !=undefined){
      schooltype.id=this.id;
      this.service.schoolType(schooltype)
      .subscribe(res=>{
        console.log(res);
        if(res.code ==201){
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Updated',
              icon: 'check_circle_outline',
             },
             duration:2000
          });
        this.router.navigate(['./adminis/table-layout/schoolType-list']);
        }
      });
    } 
    else{
      this.service.schoolType(schooltype)
      .subscribe(res=>{
        console.log(res);
        if(res.code ==201){
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Created',
              icon: 'check_circle_outline',
             },
             duration:2000
            
          });
          this.schoolType.reset();
        }
      });
    };
   
  }

}
