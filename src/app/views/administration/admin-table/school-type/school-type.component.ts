import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministrationService } from '../../administration.service';
import { SchoolTypeDto } from '../../administration';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-school-type',
  templateUrl: './school-type.component.html',
  styleUrls: ['./school-type.component.scss']
})
export class SchoolTypeComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'name', 'code','edit','delete'];
  dataSource:any;
  recordMsg:boolean=false;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private service: AdministrationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  this.getSchoolType();
  }
  
    getSchoolType(){
    this.service.getAllSchoolType()
    .subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
    });
  }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
      this.errorMsg(this.dataSource)
  }

  errorMsg(dataSource:any){
    if(dataSource.paginator.length ==0){
      this.recordMsg=true;
    }
    else{
    console.log('else');
      this.recordMsg=false;
  }
  }
  delete(id:number){
      console.log(id);
      this.service.deleteSchoolTypeById(id)
      .subscribe(res=>{
        console.log(res);
          if(res.code==200){
            this.getSchoolType();
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Deleted',
              icon: 'check_circle_outline',
             },
             duration:2000
            
          });
        }
      })
    }
  }
