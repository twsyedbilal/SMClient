import { Component, OnInit, ViewChild } from '@angular/core';
import { subject } from '../subject/subject.service';
import { MatSnackBar, MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { SubjectDialogComponent } from '../subject-dialog/subject-dialog.component';
import { SnackBarMassageComponent } from '../snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.scss']
})
export class SubjectlistComponent implements OnInit {


  displayedColumns: string[] = ['srNo', 'subjectName', 'classs', 'user', 'subjectCode', 'semester', 'bookName', 'edit', 'delete'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private service: subject,
    private snackBar: MatSnackBar,
    public dailog: MatDialog,
    private overlay: Overlay,
  ) { }


  ngOnInit() {
    this.getSubjectData();
  }


  getSubjectData() {
    this.service.loadSubjectList()
      .subscribe(res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      });

  }

  delete(id: number) {
    console.log(id);
    this.service.getsubjectDeletedById(id)
      .subscribe(res => {
        console.log(res);
        if (res.code == 200) {
          this.getSubjectData();
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Deleted',
              icon: 'check_circle_outline',
            },
            duration: 2000
          });
        }
        else {
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Data Not Deleted ',
              icon: 'check_circle_outline',
            },
            duration: 2000

          });

        }
      })
  }

  openDialog(id) {
    console.log(id);
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dailog.open(SubjectDialogComponent, {
      data: id,
      width: '50%',
      maxWidth: '92vw !important',
      height: 'auto',
      scrollStrategy: scrollStrategy,
      closeOnNavigation: false
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data == 201) {
        this.getSubjectData();
      }
    });

  }

  //    onDelete($key){
  // // if(confirm("Are you sure u delete this record")){
  // // this.service.getSubjectById($key);
  // // this.notificationService.warn("Deleted Sucessfully");
  // // }
  // this.DeleteService.openConfirmDialog {


  //    }
}



