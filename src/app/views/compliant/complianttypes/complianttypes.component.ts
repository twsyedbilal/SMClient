import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';

import { Regexpression } from 'app/views/utils/regExp';

import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { CompliantserviceService } from '../compliantservice.service';
import { ComplianttypesDto } from '../complianttypesDto';
import { Overlay } from '@angular/cdk/overlay';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-complianttypes',
  templateUrl: './complianttypes.component.html',
  styleUrls: ['./complianttypes.component.scss']
})
export class ComplianttypesComponent implements OnInit {

  complianttypesForm:FormGroup;
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
  this.complianttypesForm=this.fb.group({
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

  if(this.complianttypesForm.invalid){
  
    this.snackBar.openFromComponent(SnackBarMassageComponent, {
      data: {
        message: 'Enter Field required',
        icon: 'error_outline',
       },
       duration:3000
    });
  
  }else{
    let compliants =new ComplianttypesDto;
    compliants.name=this.complianttypesForm.get('name').value;
    compliants.code=this.complianttypesForm.get('code').value;

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
      this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
    });
   
  }

  delete(id:number){
    console.log(id);
    this.compliantService.DeletedByIdComplianttypes(id)
    .subscribe(res=>{
      console.log(res);
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
    })
  }

  // openDialog(id) {
  //   console.log(id);
  //   const scrollStrategy = this.overlay.scrollStrategies.reposition();
  //   const dialogRef = this.dailog.open(SchoolDialogComponent, {
  //     data: id,
  //     width: '50%',
  //     maxWidth:'92vw !important',
  //     height:'auto',
  //     scrollStrategy:scrollStrategy,
  //     closeOnNavigation: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //     console.log(data);
  //     if(data==201){
  //       this.getSchoolData();
  //     }
  //   });
  // }

}

