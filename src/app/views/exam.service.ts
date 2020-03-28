import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamDto } from './exam/ExamDto';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {


  constructor(private http: HttpClient) { }
 
  //Exam Calls
  public SaveExamData(data: ExamDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/exam/save', data)
  }
  
  
  public loadExamList():Observable<any>{
    return this.http.get<any>(environment.userApi+'/exam/findall')
  }
  
  public getExamDeletedById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/exam/deletebyid/'+id)
  } 
  
  public getExamById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/exam/getbyid/'+id)
  }



  //class find all 
  public findAllClassData():Observable<any>{
    return this.http.get<any>(environment.userApi+'/class/findall')
  }

  
  
  //Subject find all 
  public getAllSubjectData():Observable<any>{
    return this.http.get<any>(environment.userApi+'/subject/findall')
  }
  


  //get all data by class id 
   public getbyclassid(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/subject/getsubjectbyclass/'+id)
  }
  
}