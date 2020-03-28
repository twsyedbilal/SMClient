import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarkslaveService {
  httpClient: any;

  constructor(private http: HttpClient) { }
 
  //markslave
  public submitMarkSlave(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/marks_slave/save', data)
  }

  public findMarkSlaveList():Observable<any>{
    return this.http.get<any>(environment.userApi+'/marks_slave/findall')
  }

  public DeletedByIdMarkSlave(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/marks_slave/deletebyid/'+id)
  }

  public getMarkSlaveById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/marks_slave/getbyid/'+id)
  }

  //admsiion find all 
public findAllStudentName():Observable<any>{
  return this.http.get<any>(environment.userApi+'/admission/findalladmission')
}
 

  
  }