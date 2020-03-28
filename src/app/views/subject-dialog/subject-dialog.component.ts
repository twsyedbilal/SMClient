import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { subject } from '../subject/subject.service';
import { SubjectDto, UserData, ClassDto } from '../subject/SubjectDto';
import { Validators, FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { Regexpression } from '../utils/regExp';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatSort } from '@angular/material';
import { SnackBarMassageComponent } from '../snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-subject-dialog',
  templateUrl: './subject-dialog.component.html',
  styleUrls: ['./subject-dialog.component.scss']
})
export class SubjectDialogComponent implements OnInit {

  classForm: FormGroup;
  tableshow: boolean = false;
  userdto:UserData[];
  classDto:ClassDto[];
  resData: SubjectDto;
  validation = new Regexpression();
  //dateFormatt=new DateFormatClass();
  // dateFormatt=new DateFormatEnd();
  constructor(private service: subject,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SubjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private snackBar: MatSnackBar


  ) { }

  ngOnInit() {


    this.getDatafAll();{}
     
     
     
  }
   getDatafAll() {
     this.service.findAllUser().subscribe(res=>{this.userdto=res.data;});
     this.service.findAllClass().subscribe(res=>{this.classDto=res.data;});
 
       console.log(this.userdto);
       console.log(this.classDto);
     
    console.log(this.data);
    this.service.getSubjectById(this.data).subscribe(res => {

      this.resData = res.data;
      this.classForm = this.fb.group({
        subjectName: [this.resData.subjectName],
        subjectCode: [this.resData.subjectCode],
        semester: [this.resData.semester],
        bookName: [this.resData.bookName],
        classs: [this.resData.classs],
        user: [this.resData.user],
         username:[this.resData.username],
        // classs :[this.subjectData.classs.id]

      });
    });
  }
  submit(data: FormGroup, formDirective: FormGroupDirective): void {
    if (this.classForm.invalid) {
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
        },
        duration: 3000
      });

    } else {

      // let classsEndingDate:any=this.dateFormatt.getYYMMDD(this.classForm.get('classsEndingDate').value); 
      // console.log(classsEndingDate);
      let classData = new SubjectDto();
      classData.id = this.data;
      classData.semester = this.classForm.get('semester').value;
      classData.subjectName = this.classForm.get('subjectName').value;
      classData.subjectCode = this.classForm.get('subjectCode').value;
      classData.bookName = this.classForm.get('bookName').value;
      classData.classs = this.classForm.get('classs').value;
      classData.username = this.classForm.get('username').value;
      classData.user = this.classForm.get('username').value;


      this.service.SubjectData(classData)
        .subscribe(res => {
          if (res.code == 201) {
            this.dialogRef.close(res.code);
            this.snackBar.openFromComponent(SnackBarMassageComponent, {
              data: {
                message: 'Successfully Update',
                icon: 'check_circle_outline',
              },
              duration: 3000
            });
            formDirective.resetForm();
            this.classForm.reset();

          }
        })

    }

  }


}

