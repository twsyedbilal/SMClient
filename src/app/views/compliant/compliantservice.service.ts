import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompliantserviceService {
  httpClient: any;

  constructor(private http: HttpClient) { }
 
  //Compliant Calls
  public submitcomplianttype(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/compliant/type/create', data)
  }

  public complianttypesList():Observable<any>{
    return this.http.get<any>(environment.userApi+'/compliant/type/findall')
  }

  public DeletedByIdComplianttypes(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/compliant/type/deletebyid/'+id)
  }

  public getCompliantTypesById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/compliant/type/getbyid/'+id)
  }
 
  public getAllStudents():Observable<any>{
    return this.http.get<any>(environment.userApi+'/admission/findalladmission')
  }

  public getAllCompliantTypes():Observable<any>{
    return this.http.get<any>(environment.userApi+'/compliant/type/findall')
  }
  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: null })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
}
  handleError(e: any) {
    throw new Error("Method not implemented.");
  }

  //CompliantList Calls
  public compliantData(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/compliant/create', data)
  }
  
  
  public getAllCompliantList():Observable<any>{
    return this.http.get<any>(environment.userApi +'/compliant/findall')
  }
 
  public deletdCompliantById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/compliant/deletebyid/'+id)
  }

  public getCompliantListById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/compliant/getbyid/'+id)
  }
  }

