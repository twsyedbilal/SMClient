import { Component, OnInit, Inject } from '@angular/core';
import { ExamDto, CLassData, SubjectData } from '../exam/ExamDto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from '../utils/regExp';
import { SchoolDto } from '../administration/administration';
import { ExamService } from '../exam.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SchoolDialogComponent } from '../administration/admin-table/school-dialog/school-dialog.component';
import { SnackBarMassageComponent } from '../snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-exam-dialog',
  templateUrl: './exam-dialog.component.html',
  styleUrls: ['./exam-dialog.component.scss']
})
export class ExamDialogComponent implements OnInit {
  updateschoolForm:FormGroup;
  validation=new Regexpression();
  ExamData:ExamDto;
  ClassDto :CLassData[];
  SubjectDto:SubjectData[];
  constructor(private fb:FormBuilder, 
     private examService:ExamService,
     private snackBar: MatSnackBar,
     public dialogRef: MatDialogRef<ExamDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data   
     ) { }

  ngOnInit() {
    this.getDatafAll();{}

    this.examService.getExamById(this.data)
    .subscribe(res=>{
      this.ExamData=res.data;
     
      this.updateschoolForm=this.fb.group({
        examName:[this.ExamData.examName,[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
        examEndDate:[this.ExamData.examEndDate,[Validators.required,Validators.pattern(this.validation.onlyNumber)]],
        examStartDate:[this.ExamData.examStartDate,[Validators.required]],
        classs:[this.ExamData.classs,[Validators.required]],
        subject_id:[this.ExamData.subjectid,[Validators.required]]

     
        });
        
      });
     
     
     
     
 
 // getDatafAll() 
 {
    
    
    
  }
   }
  getDatafAll() {
    this.examService.findAllClassData().subscribe(res=>{this.ClassDto=res.data;});
    this.examService.getAllSubjectData().subscribe(res=>{this.SubjectDto=res.data;});

      console.log(this.ClassDto);
      console.log(this.SubjectDto);
  }
   

    update(){
      let ExamData=new ExamDto();
      ExamData.id=this.data;
      ExamData.examName=this.updateschoolForm.get('examName').value;
      ExamData.examEndDate=this.updateschoolForm.get('examEndDate').value;
      ExamData.examStartDate=this.updateschoolForm.get('examStartDate').value;
      ExamData.classs=this.updateschoolForm.get('classs').value;
      ExamData.subjectid=this.updateschoolForm.get('subject_id').value;
      
      
      this.examService.SaveExamData(ExamData).subscribe(res=>{
        console.log(res);
        if(res.code==201){
          this.dialogRef.close(res.code);
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Updated',
              icon: 'check_circle_outline',
             },
             duration:3000
          });
         
        }
      });
    }
  }