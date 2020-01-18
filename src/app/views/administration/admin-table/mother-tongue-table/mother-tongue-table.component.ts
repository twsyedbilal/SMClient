import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { AdministrationService } from '../../administration.service';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

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
    private snackBar: MatSnackBar) { }

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
