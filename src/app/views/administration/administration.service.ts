import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  SchoolDto, ReligionDto, CasteDto, BranchDto, SchoolTypeDto,
  MotherTongueDto, OccupationDto,
  NationalityDto, SocietyDto, PaymentTypeDto, ClassDto, BookDto, SubCasteDto
} from './administration';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }
 
  //School Calls
  public school(data: SchoolDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/school/save', data)
  }

  public loadSchoolList():Observable<any>{
    return this.http.get<any>(environment.userApi+'/school/findall')
  }

  public getSchoolDeletedById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/school/deletebyid/'+id)
  }

  public getSchoolById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/school/getbyid/'+id)
  }

  //school Type calls
  public schoolType(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/schooltype/save', data)
  }
  public getAllSchoolType():Observable<any>{
    return this.http.get(environment.userApi+'/schooltype/findall');
  }
  public deleteSchoolTypeById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/schooltype/deletebyid/'+id)
  }
  public getSchoolTypeById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/schooltype/getbyid/'+id)
 
  }


  //Religion Calls//
  public postReligion(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/religion/savereligion', data)
  }

  public getAllReligionData(): Observable<any> {
    return this.http.get<any>(environment.userApi+'/religion/findallreligion')
  }

  public deleteReligionById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi + '/religion/deleteid/'+id)
  }

  public getReligionById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi + '/religion/getbyidrel/'+id)
  }


  //MT calls
  public postMT(data: any): Observable<any> {
    return this.http.post(environment.userApi + '/mt/save', data)
  }

  public getAllMT(): Observable<any> {
    return this.http.get(environment.userApi + '/mt/findall')
  }

  public deleteMTById(id:number):Observable<any> {
    return this.http.get(environment.userApi +'/mt/deletebyid/'+id)
  }

  public getMTById(id:number): Observable<any> {
    return this.http.get(environment.userApi + '/mt/getbyid/'+id)
  }



  //Caste Calls

  public postCaste(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/caste/savecaste', data)
  }

  public getAllCaste():Observable<any>{
    return this.http.get<any>(environment.userApi +'/caste/findallcaste')
  }

  public getCasteById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi + '/caste/getbyidcaste/'+id)
  }
  
  public deleteCasteById(id:number): Observable<any> {
  return this.http.get<any>(environment.userApi +'/caste/deletebyid/'+id)
  }


  //SubCaste Calls
  
  public postSubCasteSave(data:any):Observable<any>{
      return this.http.post<any>(environment.userApi+'/subcaste/savesubcaste',data)
  }

  public getAllSubCaste():Observable<any>{
      return this.http.get<any>(environment.userApi+'/subcaste/findallsubcaste')
  }
  
  
  public getSubCasteById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/subcaste/getbyidsubcaste/'+id)
  }
  
  
  public deleteSubCasteById(id:number):Observable<any>{
    return this.http.delete<any>(environment.userApi+'/subcaste/deleteid/'+id)
}
  
  
  
  
  //Payemnt Calls 

  public payment(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/paymenttype/savepaymenttype', data)
  }

  public getPaymentById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi +'/paymenttype/getbyidpayment/'+id)
}

  public getAllPaymentTypeList():Observable<any>{
    return this.http.get<any>(environment.userApi + '/paymenttype/findallpayment')
}

public deletePaymentTypeById(id:number):Observable<any>{
  return this.http.get<any>(environment.userApi+'/paymenttype/deleteid/'+id)
}

  //branch Calls

  public postBranch(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/branch/save', data)
  }

  public getBranchById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi + '/branch/getbyid/'+id)
  }

  public getAllBranch(): Observable<any> {
    return this.http.get<any>(environment.userApi +'/branch/findall')
  }

  public deleteBranchById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi+'/branch/deletebyid/'+id)
  }


  //Occupation calls
  
  public postOccupation(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/occupation/saveoccupation',data)
  }

  public getAllOccupationData():Observable<any>{
      return this.http.get<any>(environment.userApi+'/occupation/findalloccupation')
  }

  public getOccupationDataById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/occupation/getbyidoccupation/'+id)
  }

  public deleteOccupationDataById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/occupation/deleteid/'+id)
  }



  //Nationality calls
  
  public postNationality(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/nationality/save', data)
  }


  public getAllNationalityData(): Observable<any> {
    return this.http.get<any>(environment.userApi + '/nationality/findall')
  }

  
  public getNationalityById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi + '/nationality/getbyid/'+id)
  }

  
  public deleteNationalityById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi + '/nationality/deletebyid/'+id)
  }

  //Society calls
 

  public postSociety(data: any): Observable<any> {
    return this.http.post<any>(environment.userApi + '/society/save', data)
  }

  public getAllSocietyData(): Observable<any> {
    return this.http.get<any>(environment.userApi + '/society/findall')
  }

  public getSocietyById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi + '/society/getbyid/'+id)
  }

  public deleteSocietyById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi + '/society/deletebyid/'+id)
  }
  

  // class Calls
 
  public postClass(data: ClassDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/class/save', data)
  }

  public getAllClassData(): Observable<any> {
    return this.http.get<any>(environment.userApi+'/class/findall')
  }


  public deleteClassById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi +'/class/deletebyid/'+id)
  }


  public getClassDataById(id:number): Observable<any> {
    return this.http.get<any>(environment.userApi +'/class/getbyid/'+id)
  }

  //Books Name
  public postBook(data:any):Observable<any>{
    return this.http.post<any>(environment.userApi+'/book/save',data)
  }

  public getAllBook():Observable<any>{
    return this.http.get<any>(environment.userApi+'/book/findall')
  }

  public getBookFindById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/book/getbyid/'+id)
  }
  
  public deleBookFindById(id:number):Observable<any>{
    return this.http.get<any>(environment.userApi+'/book/deletebyid/'+id)
  }

  public getAllCountry():Observable<any>{
    return this.http.get<any>(environment.userApi+'/country')
  }
  
}
