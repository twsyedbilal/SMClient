import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { CompliantserviceService } from '../compliantservice.service';
import { AdmissionDto, ComplaintDto } from '../complianttypesDto';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { Regexpression } from 'app/views/utils/regExp';
import {ComplainttypesDto} from '../complianttypesDto';

@Component({
  
  selector: 'app-compliant',
  templateUrl: './compliant.component.html',
  styleUrls: ['./compliant.component.scss']
}) 
export class CompliantComponent implements OnInit {
  complianttypesForm:FormGroup;
  validation=new Regexpression();
  tableshow:boolean=false;
  admissionDto:AdmissionDto[]=[];
  complainttypesDto: ComplainttypesDto[]=[];
  fileUploadService: any;
  studentDetailsForm: any;
  dataSource: any;
  paginato: any;
  constructor(
    private fb:FormBuilder, 
     private compliantService:CompliantserviceService,
     private snackBar: MatSnackBar,
    public dailog: MatDialog,
    private overlay:Overlay,
  ) { }

  ngOnInit() {
    this.getDataofAll();
    
  
  this.complianttypesForm=this.fb.group({
    remark:['',[Validators.required]],
    complianttypeid:['',[Validators.required]],
    admissionId:['',[Validators.required]]
 
     });
  
      this.getComplianttypesData();
 }

  getDataofAll(){
    this.compliantService.getAllStudents().subscribe(res=>{this.admissionDto=res.data;});
    this.compliantService.getAllCompliantTypes().subscribe(res=>{this.complainttypesDto=res.data;});
    
    
    console.log(this.admissionDto);
  }
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    }, error => {
      console.log(error);
    });
}


submitForm(data: FormGroup, formDirective: FormGroupDirective): void{

  if(this.complianttypesForm.invalid){
  
    this.snackBar.openFromComponent(SnackBarMassageComponent, {
      data: {
        message: 'Enter Field required',
        icon: 'error_outline',
       },
       duration:3000
    });
  
  }else{
    let compliants =new ComplaintDto;
    compliants.remark=this.complianttypesForm.get('remark').value;
    compliants.complianttypeid=this.complianttypesForm.get('complianttypeid').value;
    compliants.admissionId=this.complianttypesForm.get('admissionId').value;

    console.log(compliants);
    this.compliantService.compliantData(compliants)
    .subscribe(data=>{
      console.log(data);
      if(data.code ==201){
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Successfully Created',
            icon: 'check_circle_outline',
           },
           duration:3000
        });
       formDirective.resetForm();
       this.complianttypesForm.reset();
      this.getComplianttypesData();
      }
    });
    console.log(this.complianttypesForm);
 
    }
  }
 
  getComplianttypesData(){
    this.compliantService.complianttypesList()
    .subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginato;
     console.log(this.dataSource);
    });    
  }
}
