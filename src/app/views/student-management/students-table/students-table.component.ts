import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { StudentManagementService } from '../student-management.service';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'name','fatherName','regNo','gender','class','edit','view','delete'];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private service: StudentManagementService,
    private snackBar: MatSnackBar,
    public dailog: MatDialog,
    private overlay:Overlay
 ) { }

  ngOnInit() {
  this.getAllStudentData();
  }

  getAllStudentData(){

    this.service.findAllStudents()
    .subscribe(res=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
    
    })

  }

}
