import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { ClassDto, UserDto } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { DateFormat, DateFormatClass, DateFormatEnd } from 'app/shared/utils/dateFormat';

@Component({
  selector: 'app-class-master', 
  templateUrl: './class-master.component.html',
  styleUrls: ['./class-master.component.scss']
})
export class ClassMasterComponent implements OnInit {
 
 
 
  classForm: FormGroup;
  tableshow:boolean=false;
  userDto:UserDto[]=[];

  dateFormat=new DateFormatClass();
  dateFormatt=new DateFormatEnd();
  validation = new Regexpression();
  constructor(private service: AdministrationService,
    private fb: FormBuilder,
    private adminService:AdministrationService,
    private snackBar: MatSnackBar
    ) 
    { }
    

  ngOnInit() {

    this.getAllData();
  }

  getAllData() {
    this.service.getAllUserData().subscribe(res => { this.userDto = res.data; });

    console.log(this.userDto);


    {
    this.classForm = this.fb.group({
      className: ['', [Validators.required]],
      code: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      classsCapacity: ['', [Validators.required]],
      classsType: ['', [Validators.required]],
      classsLocation:['', [Validators.required]],
      classsEndingDate:['', [Validators.required]],
      classsStartingDate:['', [Validators.required]],
      userId:[],
    })
  }

}
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Class Table'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
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


      let classsStartingDate:any=this.dateFormat.getYYMMDD(this.classForm.get('classsStartingDate').value); 
       console.log(classsStartingDate);
       let classsEndingDate:any=this.dateFormatt.getYYMMDD(this.classForm.get('classsStartingDate').value); 
        console.log(classsEndingDate);

      let classData = new ClassDto();
    classData.className = this.classForm.get('className').value;
    classData.code = this.classForm.get('code').value;
    classData.fees = this.classForm.get('fees').value;

    classData.classsCapacity = this.classForm.get('classsCapacity').value;
    classData.classsType = this.classForm.get('classsType').value;
    classData.classsLocation = this.classForm.get('classsLocation').value;
    classData.classsEndingDate = this.classForm.get('classsEndingDate').value;
    classData.classsStartingDate = this.classForm.get('classsStartingDate').value;
    classData.userId = this.classForm.get('userId').value;
    this.service.postClass(classData)
      .subscribe(res => {
        if (res.code == 201) {
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: { 
              message: 'Successfully Created',
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
