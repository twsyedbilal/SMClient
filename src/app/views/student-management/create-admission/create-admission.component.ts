import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdministrationService } from 'app/views/administration/administration.service';
import { OccupationDto, NationalityDto, SocietyDto, CasteDto, SubCasteDto, MotherTongueDto, ClassDto, ReligionDto, BranchDto, SchoolTypeDto, SchoolDto } from 'app/views/administration/administration';
import { AdmissionDto, AddressDto } from '../studentManagement';
import { StudentManagementService } from '../student-management.service';
import { DateFormat } from 'app/shared/utils/dateFormat';

@Component({
  selector: 'app-create-admission',
  templateUrl: './create-admission.component.html',
  styleUrls: ['./create-admission.component.scss']
})
export class CreateAdmissionComponent implements OnInit {
  admissionDetails:AdmissionDto;
  addressDetails:AddressDto;
  studentDetailsForm:FormGroup;
  addressForm:FormGroup;
  status:string[]=['Active','InActive'];
  liveStatus:string[]=['Present','Absent'];
  state=[{name:'Maharashtra',code:2},{name:'Andhrapardesh',code:3}];
  cities=[{name:'Mumbai',code:45},{name:'Nanded',code:78}];
  country=[{name:'India',code:42},{name:'Nepal',code:85},{name:'Bangladesh',code:69}];
  occupationData:OccupationDto[]=[];
  nationalityData:NationalityDto[]=[];
  society:SocietyDto[]=[];
  casteData:CasteDto[]=[];
  subCasteData:SubCasteDto[]=[];
  motherTongueData:MotherTongueDto[]=[];
  classData:ClassDto[]=[];
  religionData:ReligionDto[]=[]; 
  branchData:BranchDto[]=[];
  schoolname:SchoolDto[]=[];
  schoolType:SchoolTypeDto[]=[];
  doB=new Date();
  dateFormat=new DateFormat();
  constructor(private fb:FormBuilder,
    private adminService:AdministrationService,
    private _smService:StudentManagementService) {

      this.admissionDetails=new AdmissionDto();
      this.addressDetails=new AddressDto();
    }

  ngOnInit() {
    this.studentDetailsForm=this.fb.group({
      studentName:[''],
      surname:[''],
      fatherName:[''],
      motherName:[''],
      guardianName:[''],
      gender:['Female'],
      dob:[''],
      date:[],
      dobInWords:[''],
      placeOfBirth:[''],
      uID:[''],
      idNo:[''],
      regNo:[''],
      income:[''],
      contactNo:[''],
      status:[''],
      liveStatus:[''],
      identityByMark:[''],
      className:[''],
      religionName:[''],
      casteName:[''],
      subCaste:[''],
      occupation:[''],
      society:[''],
      nationality:[''],
      mothertongue:[''],
      schoolId:[''],
      schoolTypeId:['']
  });

  this.addressForm=this.fb.group({
      pinCode:[''],
      city:[''],
      state:[''],
      country:[''],
      address:['']
  });
  this.getDropDownlistData();
}


  getDropDownlistData(){
  this.adminService.getAllClassData().subscribe(res=>{this.classData=res.data;});
  this.adminService.getAllReligionData().subscribe(res=>{this.religionData=res.data;});
  this.adminService.getAllCaste().subscribe(res=>{this.casteData=res.data;});
  this.adminService.getAllSubCaste().subscribe(res=>{this.subCasteData=res.data;});
  this.adminService.getAllOccupationData().subscribe(res=>{this.occupationData=res.data;});
  this.adminService.getAllSocietyData().subscribe(res=>{this.society=res.data;});
  this.adminService.getAllNationalityData().subscribe(res=>{(res);this.nationalityData=res.data;});
  this.adminService.getAllMT().subscribe(res=>{this.motherTongueData=res.data;});
  this.adminService.loadSchoolList().subscribe(res=>{this.schoolname=res.data});
  this.adminService.getAllSchoolType().subscribe(res=>{this.schoolType=res.data});  
  this.adminService.getAllCountry().subscribe(res=>{console.log(res);})  
}

  addmissionDetails(){
    let dob:any=this.dateFormat.getYYMMDD(this.studentDetailsForm.get('dob').value);    
    console.log(dob);
    /*
      let month = birthdate.getMonth();
      console.log(month);
      let birthDate :string ='';
      if(month>10){
        birthDate=birthdate.getDate()+"/"+(month+1)+"/"+birthdate.getFullYear();
      }
      if(month<10){
        let mnth="0"+(month+1);
        birthDate=birthdate.getDate()+"/"+mnth+"/"+birthdate.getFullYear();
      }
      console.log(birthDate);
   
    */


  this.admissionDetails.studentsName=this.studentDetailsForm.get('studentName').value;
     this.admissionDetails.surName=this.studentDetailsForm.get('surname').value;
    this.admissionDetails.fathersName=this.studentDetailsForm.get('fatherName').value;
    this.admissionDetails.mothersName=this.studentDetailsForm.get('motherName').value;
    this.admissionDetails.guardiansName=this.studentDetailsForm.get('guardianName').value;
    this.admissionDetails.gender=this.studentDetailsForm.get('gender').value;
    this.admissionDetails.dateOfBirth=dob;
    this.admissionDetails.date=this.studentDetailsForm.get('date').value;
    this.admissionDetails.dateOfBirthInWords=this.studentDetailsForm.get('dobInWords').value;
    this.admissionDetails.placeOfBirth=this.studentDetailsForm.get('placeOfBirth').value; 
    this.admissionDetails.uidNo=this.studentDetailsForm.get('uID').value;
    this.admissionDetails.idNo=this.studentDetailsForm.get('idNo').value;
    this.admissionDetails.studentRegNo=this.studentDetailsForm.get('regNo').value;
    this.admissionDetails.income=this.studentDetailsForm.get('income').value;
    this.admissionDetails.contactNo=this.studentDetailsForm.get('contactNo').value;
    this.admissionDetails.status=this.studentDetailsForm.get('status').value;
    this.admissionDetails.liveStatus=this.studentDetailsForm.get('liveStatus').value;
    this.admissionDetails.identityByMarkOrAadharNo=this.studentDetailsForm.get('identityByMark').value;
    this.admissionDetails.classId=this.studentDetailsForm.get('className').value;
    this.admissionDetails.religionId=this.studentDetailsForm.get('religionName').value;
    this.admissionDetails.castId=this.studentDetailsForm.get('casteName').value;
    this.admissionDetails.subCastId=this.studentDetailsForm.get('subCaste').value;
    this.admissionDetails.occupationId=this.studentDetailsForm.get('occupation').value;
    this.admissionDetails.societyId=this.studentDetailsForm.get('society').value;
    this.admissionDetails.nationalityId=this.studentDetailsForm.get('nationality').value;
    this.admissionDetails.mothertongId=this.studentDetailsForm.get('mothertongue').value;
    this.admissionDetails.schoolId=this.studentDetailsForm.get('schoolId').value;
    this.admissionDetails.schoolTypeId=this.studentDetailsForm.get('schoolTypeId').value; 
      
      console.log(this.admissionDetails);
  }


  addressDetail(){

  this.addressDetails.pincode=this.addressForm.get('pinCode').value;
  this.addressDetails.cityId=this.addressForm.get('city').value;
  this.addressDetails.countryId=this.addressForm.get('country').value;
 this.addressDetails.stateId=this.addressForm.get('state').value;
 this.addressDetails.detailAddress=this.addressForm.get('address').value;

    console.log(this.addressDetails);
  }

  submitAddmissionForm(){
    console.log('click');
    this.admissionDetails.address.push(this.addressDetails);
    this._smService.saveAddmission(this.admissionDetails)
    .subscribe(res=>{
      console.log(res);
    });
    console.log(this.admissionDetails);
    
  }


}
