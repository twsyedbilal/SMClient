import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { LoginService } from 'app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin4',
  templateUrl: './signin4.component.html',
  styleUrls: ['./signin4.component.scss'],
  animations: egretAnimations
})
export class Signin4Component implements OnInit {

  signupForm: FormGroup;
  role:string='';
  constructor(private fb: FormBuilder,
              private router:Router,
              private loginService:LoginService) {}

  ngOnInit() {

    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signupForm = this.fb.group(
      {
        UserName: ["",[Validators.required]],
        password: password,
        agreed: [false,Validators.required]
      }
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    let name=this.signupForm.get('UserName').value;
    let psw=this.signupForm.get('password').value;
     
    this.loginService.login({username:name,password:psw})
    .subscribe(data=>{
      console.log(data);
      this.loginService.signIn(data);
      this.loginService.authorised();
       })
  }
}
