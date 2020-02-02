import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { AdmissionDto } from './studentManagement';

@Injectable({
  providedIn: 'root'
})
export class StudentManagementService {

  constructor(private http:HttpClient) { }


 public saveAddmission(data:AdmissionDto):Observable<any>{
       return this.http.post<any>(environment.userApi+'/admission/saveadmission',data)
    }
  
}
