  import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { LoginService } from 'app/shared/services/login.service';
import { Router } from '@angular/router';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';

@Component({
  selector: 'app-signin4',
  templateUrl: './signin4.component.html',
  styleUrls: ['./signin4.component.scss'],
  animations: egretAnimations
})
export class Signin4Component implements OnInit {

  signupForm: FormGroup;
  role:string='';
  spinner: boolean = false;
  loadingTime = 4000;
  title = 'Please wait';
   
  constructor(private fb: FormBuilder,
              private router:Router,
              private loginService:LoginService,
              private loader: AppLoaderService) {}

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
    console.log('click');
    this.loader.open(this.title);
    console.log(this.signupForm);
    let name=this.signupForm.get('UserName').value;
    let psw=this.signupForm.get('password').value;
   
    setTimeout(() => {
        this.loginService.login({username:name,password:psw}).
        subscribe(data=>{
          this.loader.close();
          console.log(data);
            this.loginService.signIn(data);
            this.loginService.authorised();
        });
     }, this.loadingTime);
  5}
}
