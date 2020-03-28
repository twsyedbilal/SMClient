import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { classData } from './StudentMarkDto';

@Injectable({
  providedIn: 'root'
})
export class StudnetMarkService {

  constructor( private http:HttpClient ) { }


  public LoadAllStudentMarks(data:classData): Observable<any> {
    return this.http.post<any>(environment.userApi + '/student/marks/', data)
  }

  //get all class  by id
  public getAllDataClassById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/student/marks/getbyclassid/ '+id)
  } 

//class find all 
public FindAllClassData():Observable<any>{
  return this.http.get<any>(environment.userApi+'/class/findall')
}

//admissionfind all 
public FindAllStudent():Observable<any>{
  return this.http.get<any>(environment.userApi+'/admission/findalladmission')
}

public SaveAllClassData(data:classData): Observable<any> {
  return this.http.post<any>(environment.userApi + '/exam/save', data)
}


//find all Exam 
public FindAllExamData():Observable<any>{
  return this.http.get<any>(environment.userApi+'/exam/findall')
}
//class find all 
public findAllClassData():Observable<any>{
  return this.http.get<any>(environment.userApi+'/class/findall')
}


  //get all data by class id 
  public getbyclassid(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/subject/getsubjectbyclass/'+id)
  }
//find all Subject List
public FindAllSubjectData():Observable<any>{
  return this.http.get<any>(environment.userApi+'/subject/findall')
}
}
