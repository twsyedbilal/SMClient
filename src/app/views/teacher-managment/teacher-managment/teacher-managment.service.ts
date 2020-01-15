import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherManagmentService {

  constructor(private http:HttpClient) { }

createUser(data:any):Observable<any>{
  return this.http.post<any>(environment.userApi+'/user/add',data)
}

}
