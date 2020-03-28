import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import {  MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { Overlay } from '@angular/cdk/overlay';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { DialogComponent } from 'app/views/administration/admin-table/dialog/dialog.component';
import { MarkslaveService } from '../markslave.service';
import { markslavedto, admissionData } from '../MarkSlaveDto';

@Component({
  selector: 
  'app-markslave',
  templateUrl: './markslave.component.html',
  styleUrls: ['./markslave.component.scss']
})
export class MarkSlaveComponent implements OnInit {
  
  displayedColumns: string[] = ['studentname','rollNo',];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;


  occupationForm: FormGroup;
  admissionDto:admissionData[];
  validation = new Regexpression();
  
  tableshow:boolean=false;
  constructor(private fb: FormBuilder,
    private service: MarkslaveService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.getAdmissionData();
    this.occupationForm = this.fb.group({
      mark: ['', [Validators.required]],
      remark: ['', [Validators.required]],
      admission:['',[]]
    });
  }
  getAdmissionData() {
     this.service.findAllStudentName().subscribe(res=>{this.admissionDto=res.data;});
     console.log(this.admissionDto)
    
  
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='MarksSlave List'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }





  submit(form: FormGroup, formDirective: FormGroupDirective): void {
    if (this.occupationForm.invalid) {
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
        },
        duration: 3000
      });

    }
    else {
      let data = new markslavedto();
      data.mark = this.occupationForm.get('mark').value;
      data.remark = this.occupationForm.get('remark').value;
     data. admission=this.occupationForm.get('admission').value;
      this.service.submitMarkSlave(data).subscribe(res => {
        console.log(res);
        if (res.code == 201) {
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Created',
              icon: 'check_circle_outline',
            },
            duration: 3000
          });
          formDirective.resetForm();
          this.occupationForm.reset();
        }
      });

    }
  }
}
