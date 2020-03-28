import { Injectable } from '@angular/core';
import { SubjectDto, UserData } from './SubjectDto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { MatDialog } from '@angular/material';
import { DeleteComponent } from './delete/delete.component';

@Injectable({
  providedIn: 'root'
})
export class subject {

 

constructor(private http: HttpClient,
  private  dialog:MatDialog) { }
 
//subject Calls
public SubjectData(data: SubjectDto): Observable<any> {
  return this.http.post<any>(environment.userApi + '/subject/save', data)
}

//user find all 
public findAllUser():Observable<any>{
  return this.http.get<any>(environment.userApi+'/user/findAll')
}

//classs find all 
public findAllClass():Observable<any>{
  return this.http.get<any>(environment.userApi+'/class/findall')
}

public loadSubjectList():Observable<any>{
  return this.http.get<any>(environment.userApi+'/subject/findall')
}

public getsubjectDeletedById(id:number):Observable<any>{
  return this.http.get<any>(environment.userApi+'/subject/deletedbyid/'+id)
} 

public getSubjectById(id:number):Observable<any>{
  return this.http.get<any>(environment.userApi+'/subject/getbyid/'+id)
}

 
openopenConfirmationDialog (){
  this.dialog.open(DeleteComponent, 
    {
  width:'94px',
  disableClose:true
    });
  
  
  }

  //getclasssbyid
public getclassById(id:number):Observable<any>{
  return this.http.get<any>(environment.userApi+'/class/getbyid/'+id)
}
 
}
