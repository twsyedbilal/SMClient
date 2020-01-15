import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';
import { UserDetails } from './auth/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   role:string='';
  constructor(private http:HttpClient,
            private router:Router,
            ) {

   }


  login(data:any):Observable<UserDetails>{
    console.log(data);
    return this.http.post<UserDetails>(environment.loginApi,data)
  }


  public signIn(userDetails:UserDetails):void{
    console.log(userDetails);
    sessionStorage.setItem('userDetails',JSON.stringify(userDetails));


   //   sessionStorage.setItem('userAccessDetails',JSON.stringify(userDetails.list));
  }

  public getAuthTokenService() : string {
    let userDetails : UserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
    if(userDetails !=null ){
      return userDetails.authToken;
    }
    return null;
  }

  public isSignedIn():boolean{
      if(sessionStorage.getItem('userDetails')){
        return true;
      }
      return false;
  }


  public authorised():void{
    let user:UserDetails =JSON.parse(sessionStorage.getItem('userDetails'));
        if(user.authToken !=null || user.authToken !='undefined'){
          user.authorities.map(x=>{
            this.role=x.authority;
          })
            this.router.navigate(['/others/'+this.role+'/'+user.id])
        }
        else{
          this.router.navigate(['/sessions/signin4'])
           }
   }


  logout(){
    sessionStorage.removeItem('userDetails');
    sessionStorage.removeItem('userName');
     this.router.navigate(['session/login']);
    }
}
