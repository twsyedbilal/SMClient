import { Component, OnInit, ViewChild } from '@angular/core';
import { ExamDto, CLassData, SubjectData } from './ExamDto';
import { ExamService } from '../exam.service';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, FormArray, FormControl } from '@angular/forms';
import { Regexpression } from '../utils/regExp';
import { MatSnackBar, MatTabChangeEvent, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SnackBarMassageComponent } from '../snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'subjectName',];
  dataSource: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  schoolForm: FormGroup;
  validation = new Regexpression();
  tableshow: boolean = false;
  classDto: CLassData;
  subjectDto: SubjectData[]=[];
  //subjectId : any [];
  subjectId: Array<number> = [];

 constructor(private fb: FormBuilder,
    private examService: ExamService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.schoolForm = this.fb.group({
      examName: ['', [Validators.required]],
      examEndDate: ['', [Validators.required]],
      examStartDate: ['', [Validators.required]],
      classs: ['', []],
      subjectid: ['', []] 
    });
    this.getDatafAll();
    
  }
  
  getDatafAll() {
    this.examService.findAllClassData().subscribe(res => 
      { this.classDto = res.data; });
  }

  getSubjectData(){
    let id=this.schoolForm.get('classs').value;
    this.examService.getbyclassid(id)
      .subscribe(res => {
        console.log(res.data);
        this.subjectDto=res.data;
      });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
    if (tabChangeEvent.tab.textLabel == 'Exam List') {
      this.tableshow = true;
    } else {
      this.tableshow = false;
    }
  }

  public valueChange(list,currentobj,event){
      this.subjectId.push(currentobj.id);
      console.log(this.subjectId);
  }
  submitForm(data: FormGroup, formDirective: FormGroupDirective): void {

    if (this.schoolForm.invalid) {

      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
        },
        duration: 3000
      });

    } else {
      let exam = new ExamDto();
      exam.examName = this.schoolForm.get('examName').value;
      exam.examEndDate = this.schoolForm.get('examEndDate').value;
      exam.examStartDate = this.schoolForm.get('examStartDate').value;
      exam.classs = this.schoolForm.get('className').value;
      exam.subjectid = this.subjectId;
      console.log(exam);
      this.examService.SaveExamData(exam)
        .subscribe(data => {
          console.log(data);
          if (data.code == 201) {
            this.snackBar.openFromComponent(SnackBarMassageComponent, {
              data: {
                message: 'Successfully Created',
                icon: 'check_circle_outline',
              },
              duration: 3000
            });
            formDirective.resetForm();
            this.schoolForm.reset();

          }
        });
      console.log(this.schoolForm);

    }
  }
}
