import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeacherManagmentService } from '../teacher-managment.service';
import { UserAddDto } from '../teacherModule';

@Component({
  selector: 'app-teacher-creation',
  templateUrl: './teacher-creation.component.html',
  styleUrls: ['./teacher-creation.component.scss']
})
export class TeacherCreationComponent implements OnInit {
  userForm:FormGroup;
  roles=['Admin','OPS'];
  constructor(private fb:FormBuilder,
              private teacherService:TeacherManagmentService) { }

  ngOnInit() {
    
      this.userForm=this.fb.group(
        {
          name:[''],
          roles:[''],
          mobileNo:[''],
          status:[''],
          userName:[''],
          password:[''],
          emailid:['']
        });
  }

  onSubmit(){
      console.log(this.userForm);
      let userDetails=new UserAddDto();
      userDetails.name=this.userForm.get('name').value;
      userDetails.roles=this.userForm.get('roles').value;
      userDetails.mobile=this.userForm.get('mobileNo').value;
      userDetails.status=this.userForm.get('status').value;
      userDetails.username=this.userForm.get('userName').value;
      userDetails.password=this.userForm.get('password').value;
      userDetails.email=this.userForm.get('emailid').value;  
      console.log(userDetails);
      this.teacherService.createUser(userDetails)
      .subscribe(data=>{
        console.log(data);
      });
    }

}
