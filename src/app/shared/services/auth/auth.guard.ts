import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  public authToken;
  private isAuthenticated = true; // Set this value dynamically
  
  constructor(private router: Router,
              private loginService:LoginService) {}
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.loginService.isSignedIn()) {
      return true
    
    }
    alert('You dont have permision to see this page');
     this.router.navigate(['/sessions/signin4']);
    return false;
  }
}