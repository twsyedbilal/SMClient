import { Component, OnInit, ViewChild } from '@angular/core';
import { Regexpression } from 'app/views/utils/regExp';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { CompliantserviceService } from '../compliantservice.service';
import { Overlay } from '@angular/cdk/overlay';
//import { DialogComponent } from 'app/views/administration/admin-table/dialog/dialog.component';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { DialogComponent } from 'app/views/administration/admin-table/dialog/dialog.component';

@Component({
  selector: 'app-compliantlist',
  templateUrl: './compliantlist.component.html',
  styleUrls: ['./compliantlist.component.scss']
})
export class CompliantlistComponent implements OnInit {
    displayedColumns: string[] = ['srNo', 'Student-Name', 'rollNo','remark','edit','delete'];
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
    this.getAllCompliantListdata();
  }


  getAllCompliantListdata(){
    this.compliantService.getAllCompliantList()
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


  openDialog(id) {
    console.log(id);
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dailog.open(DialogComponent, {
      data:{id:id,status:'Compliant'},
      width: '50%',
      maxWidth:'92vw !important',
      height:'auto',
      scrollStrategy:scrollStrategy,
      closeOnNavigation: false
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if(data==201){
        this.getAllCompliantListdata();
      }
    });
  }
  
  delete(id:number){
    console.log(id);
    this.compliantService.deletdCompliantById(id)
    .subscribe(res=>{
      console.log(res);
        if(res.code==200){
        this.getAllCompliantListdata();
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
