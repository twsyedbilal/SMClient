import { Component, OnInit, ViewChild } from '@angular/core';
import { MarkslaveDialogComponent } from '../markslave-dialog/markslave-dialog.component';
import { MarkslaveService } from '../markslave.service';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-markslave-list',
  templateUrl: './markslave-list.component.html',
  styleUrls: ['./markslave-list.component.scss']
})
export class MarkslaveListComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'mark', 'remark','admission','edit','delete'];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private service: MarkslaveService,
    private snackBar: MatSnackBar,
    public dailog: MatDialog,
    private overlay:Overlay,
    ) { }

 
  ngOnInit() {
  this.getSchoolData();
  }


  getSchoolData(){
    this.service.findMarkSlaveList()
    .subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
    });
   
  }

  delete(id:number){
    console.log(id);
    this.service.DeletedByIdMarkSlave(id)
    .subscribe(res=>{
      console.log(res);
        if(res.code==200){
        this.getSchoolData();
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

  openDialog(id) {
    console.log(id);
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dailog.open(MarkslaveDialogComponent, {
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
        this.getSchoolData();
      }
    });
  }


}
