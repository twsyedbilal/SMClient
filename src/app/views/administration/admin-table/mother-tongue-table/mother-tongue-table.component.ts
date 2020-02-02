import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MatDialog } from '@angular/material';
import { AdministrationService } from '../../administration.service';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-mother-tongue-table',
  templateUrl: './mother-tongue-table.component.html',
  styleUrls: ['./mother-tongue-table.component.scss']
})
export class MotherTongueTableComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'name', 'code','edit','delete'];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private service: AdministrationService,
    private snackBar: MatSnackBar,
    public dailog: MatDialog,
    private overlay:Overlay
 ) { }

  ngOnInit() {
    this.getMTData();
  }

  getMTData(){
    this.service.getAllMT()
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
  const dialogRef = this.dailog.open(DialogComponent, {
    data:{id:id,status:'Mother Tongue'},
    width: '50%',
    maxWidth:'92vw !important',
    height:'auto',
    scrollStrategy:scrollStrategy,
    closeOnNavigation: false
  });
  dialogRef.afterClosed().subscribe(data => {
    console.log(data);
    if(data==201){
      this.getMTData();
    }
  });
}

 
 
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id:number){
    console.log(id);
    this.service.deleteMTById(id)
    .subscribe(res=>{
      console.log(res);
        if(res.code==200){
        this.getMTData();
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
    });
  }

}
