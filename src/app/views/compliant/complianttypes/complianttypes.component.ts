import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
//import { DialogComponent } from './dialog.component';

import { Regexpression } from 'app/views/utils/regExp';
 

import {  MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { CompliantserviceService } from '../compliantservice.service';
import { ComplianttypesDto } from '../complianttypesDto';
import { Overlay } from '@angular/cdk/overlay';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 
  'app-complianttypes',
  templateUrl: './complianttypes.component.html',
  styleUrls: ['./complianttypes.component.scss']
})
export class ComplianttypesComponent implements OnInit {

  updatform:FormGroup;
  validation=new Regexpression();
  tableshow:boolean=false;
  displayedColumns: string[] = ['srNo', 'name', 'code','edit','delete'];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private fb:FormBuilder, 
     private compliantService:CompliantserviceService,
     private snackBar: MatSnackBar,
    public dailog: MatDialog,
    private overlay:Overlay,
     ) { }

  ngOnInit() {
   this. getCompliatData();
  }
   getCompliatData(){
    this.compliantService.getAllCompliantList()
    .subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
    });
  
  this.updatform=this.fb.group({
    name:['',[Validators.required]],
    code:['',[Validators.required]]
 
     });
  
     this.getComplianttypesData();
 }

 public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  console.log(tabChangeEvent);
    if(tabChangeEvent.tab.textLabel=='Compliant type List'){
      this.tableshow=true;
    }else{
      this.tableshow=false;
    }
}

 submitForm(data: FormGroup, formDirective: FormGroupDirective): void{

  if(this.updatform.invalid){
    this.snackBar.openFromComponent(SnackBarMassageComponent, {
      data: {
        message: 'Enter Field required',
        icon: 'error_outline',
       },
       duration:3000
    });
  
  }else{
    let compliants =new ComplianttypesDto;
    compliants.name=this.updatform.get('name').value;
    compliants.code=this.updatform.get('code').value;

    console.log(compliants);
    this.compliantService.submitcomplianttype(compliants)
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
       this.updatform.reset();
      this.getComplianttypesData();
      }
    });
    console.log(this.updatform);
  
    }
  }

  getComplianttypesData(){
    this.compliantService.complianttypesList()
    .subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
    });
   
  }
  
 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id:number){
    console.log(id);
    this.compliantService.deletdCompliantById(id)
    .subscribe(res=>{
      console. log(res);
        if(res.code==200){
        this.getComplianttypesData();
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Successfully Deleted',
            icon: 'check_circle_outline',
           },
           duration:2000
         });
      }
      else{
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Data Not Deleted ',
            icon: 'check_circle_outline',
           },
           duration:2000
          
        });
        
      }
    })}
  
  


   openDialog(id) {
     console.log(id);
     const scrollStrategy = this.overlay.scrollStrategies.reposition();
     const dialogRef = this.dailog.open(DialogComponent, {
      data: id,
      width: '50%',
       maxWidth:'92vw !important',
       height:'auto',
       scrollStrategy:scrollStrategy,
       closeOnNavigation: false
   });
     dialogRef.afterClosed().subscribe(data => {
       console.log(data);
       if(data==201){
         this.getCompliatData();
       }
     });
   } 


  }