import { Component, OnInit, ViewChild } from '@angular/core';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { MatPaginator, MatSort, MatSnackBar, MatTableDataSource } from '@angular/material';
import { AdministrationService } from '../../administration.service';

@Component({
  selector: 'app-society-table',
  templateUrl: './society-table.component.html',
  styleUrls: ['./society-table.component.scss']
})
export class SocietyTableComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'name', 'code','edit','delete'];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private service: AdministrationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getSocietyData();
  }

  getSocietyData(){
    this.service.getAllSocietyData()
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
    this.service.deleteSocietyById(id)
    .subscribe(res=>{
      console.log(res);
        if(res.code==200){
        this.getSocietyData();
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
