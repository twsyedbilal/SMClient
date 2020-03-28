import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatTableDataSource, MatDialog } from '@angular/material';
import { AdministrationService } from '../../administration.service';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { Overlay } from '@angular/cdk/overlay';
import { DialogComponent } from '../dialog/dialog.component';
import { ClassdialogComponent } from '../classdialog/classdialog.component';
import { DateFormatClass, DateFormatEnd } from 'app/shared/utils/dateFormat';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.scss']
})
export class ClassTableComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = ['srNo', 'name','userId', 'code','Fees','classsCapacity', 'classsEndingDate','classsStartingDate','classsLocation','classsType','edit','delete'];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dateFormatt=new DateFormatEnd();
  constructor(private service: AdministrationService,
    private snackBar: MatSnackBar,public dailog: MatDialog,
    private overlay:Overlay
 ) { }

  ngOnInit() {
    this.getClassTable();
  }

  getClassTable(){
    this.service.getAllClassData()
    .subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
    });

  }


  openDialog(id) {
    console.log(id);
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dailog.open(ClassdialogComponent, {
      data:id,
      width: '50%',
      maxWidth:'92vw !important',
      height:'auto',
      scrollStrategy:scrollStrategy,
      closeOnNavigation: false
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if(data==201){
        this.getClassTable();
      }
    });
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  delete(id:number){
    console.log(id);
    this.service.deleteClassById(id)
    .subscribe(res=>{
      console.log(res);
        if(res.code==200){
        this.getClassTable();
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Successfully Deleted',
            icon: 'check_circle_outline',
           },
           duration:2000
         });
      }
      else{
        let classsEndingDate:any=this.dateFormatt.getYYMMDD(this.classForm.get('classsEndingDate').value); 
        console.log(classsEndingDate);
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Data Not Deleted ',
            icon: 'check_circle_outline',
           },
           duration:2000
          
        });
        
      }
    });
  }
}
