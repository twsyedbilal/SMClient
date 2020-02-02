import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatTableDataSource, MatDialog } from '@angular/material';
import { AdministrationService } from '../../administration.service';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { Overlay } from '@angular/cdk/overlay';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-occupation-table',
  templateUrl: './occupation-table.component.html',
  styleUrls: ['./occupation-table.component.scss']
})
export class OccupationTableComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'name', 'code','edit','delete'];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private service: AdministrationService,
    private snackBar: MatSnackBar,
    public dailog: MatDialog,
    private overlay:Overlay) { }

  ngOnInit() {
    this.getOccupationData();
  }

  getOccupationData(){  
    this.service.getAllOccupationData()
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
    data:{id:id,status:'Occupation'},
    width: '50%',
    maxWidth:'92vw !important',
    height:'auto',
    scrollStrategy:scrollStrategy,
    closeOnNavigation: false
  });
  dialogRef.afterClosed().subscribe(data => {
    console.log(data);
    if(data==201){
      this.getOccupationData();
    }
  });
}


 
 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id:number){
    console.log(id);
    this.service.deleteOccupationDataById(id)
    .subscribe(res=>{
      console.log(res);
        if(res.code==200){
        this.getOccupationData();
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



}
