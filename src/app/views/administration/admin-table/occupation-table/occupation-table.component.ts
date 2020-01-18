import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatTableDataSource } from '@angular/material';
import { AdministrationService } from '../../administration.service';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

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
    private snackBar: MatSnackBar) { }

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
