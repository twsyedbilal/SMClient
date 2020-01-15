import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  SchoolDto, ReligionDto, CasteDto, BranchDto, SchoolTypeDto,
  MotherTongueDto, OccupationDto,
  NationalityDto, SocietyDto, PaymentTypeDto, ClassDto, BookDto
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
  //school Type calls
  public schoolType(data: SchoolTypeDto): Observable<any> {
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
  public postReligion(data: ReligionDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/religion/savereligion', data)
  }

  //MT calls
  public postMT(data: MotherTongueDto): Observable<any> {
    return this.http.post(environment.userApi + '/mt/save', data)
  }

  //Caste Calls
  public postCaste(data: CasteDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/caste/savecaste', data)
  }

  //Payemnt Calls 

  public payment(data: PaymentTypeDto): Observable<any> {
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

  public postBranch(data: BranchDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/branch/save', data)
  }

  //Occupation calls
  public postOccupation(data: OccupationDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/occupation/saveoccupation', data)
  }

  //Nationality calls
  public postNationality(data: NationalityDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/nationality/save', data)
  }
  //Society calls
  public postSociety(data: SocietyDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/society/save', data)
  }

  // class Calls
  public postClass(data: ClassDto): Observable<any> {
    return this.http.post<any>(environment.userApi + '/class/save', data)
  }

  //Books Name
  public postBook(data:BookDto):Observable<any>{
    return this.http.post<any>(environment.userApi+'/book/save',data)
  }

}
