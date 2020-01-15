import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from "./login";
import { LoginService } from "../login.service";

export class Interceptor implements HttpInterceptor {
    constructor(private service: LoginService) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: string = this.service.getAuthTokenService();

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.getAuthToken()
                }
            });
        }
        return next.handle(request);

    }

    public getAuthToken(): string {
        let userDetails: UserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        console.log(userDetails);
        return userDetails.authToken ? userDetails.authToken : null;
    }
}