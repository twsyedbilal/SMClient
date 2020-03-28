import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { Regexpression } from '../utils/regExp';
import { StudnetMarkService } from './studnet-mark.service';
import { MatSnackBar, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { group } from '@angular/animations';
import { classData, examData } from './StudentMarkDto';
import { SnackBarMassageComponent } from '../snack-bar-massage/snack-bar-massage.component';
import { SubjectData } from '../exam/ExamDto';
 
@Component({
  selector: 'app-student-mark',
  templateUrl: './student-mark.component.html',
  styleUrls: ['./student-mark.component.scss']
})
export class StudentMarkComponent implements OnInit {

  displayedColumns: string[] = ['rollNo','studentsName','mark','remark',];
  dataSource:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  StudentMarkForm:FormGroup;
  classdto:classData;
  examdto:examData[]=[];
  subjectdto:SubjectData[]=[];
  examId: Array<number> = [];
  slavedto:any[]
  Validation =new Regexpression();
  tableshow:boolean=false;
  overlay: any;
  dailog: any; 
  marks:any[]=[];
  constructor(private fb:FormBuilder,
    private studentService:StudnetMarkService,
    private snackBar:MatSnackBar) { }   public data   
    

  ngOnInit() { 
   //  this.getAllDataById();{}
   // this.getStudnetdata();
  
  //  getAllDataById() {
  //   this.studentService.getAllDataClassById(this.data)
  //   .subscribe(res=>{
  //     this.StudentMarkForm=res.data;
     
  //     this.StudentMarkForm=this.fb.group({
  //   mark:[''],
  //   remark:[''],  
  //   studentsName:[''],     
  //      });
        
  //     });
   
    this.getAllClassData();
    this.StudentMarkForm=this.fb.group({
      classsId:[''],
      examId:[''],
      subjectid:[''],
      slavedto:[''],


      mark:['']

      }
    )
  
  this.StudentMarkForm.get('classsId').valueChanges
    .subscribe(x=>{
      console.log(x);
      this.getClassData(x);

    });
   
  }
  getClassData(id:number){
  console.log(id);
  this.studentService.getAllDataClassById(id)
  .subscribe(res=>{
    console.log(res);
  });
}
public valueChange(list,currentobj,event){
  this.examId.push(currentobj.id);
  console.log(this.examId);
}
  getAllClassData() {
   this.studentService.FindAllClassData().subscribe(res=>{this.classdto=res.data;});
  
   this.studentService.FindAllExamData().subscribe(res=>{this.examdto=res.data;});

   this.studentService.FindAllSubjectData().subscribe(res=>{this.subjectdto=res.data;});
   console.log(this.subjectdto)
   console.log(this.classdto)
   console.log(this.examdto)

   

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  submitForm(data:FormData,formDirective:FormGroupDirective):
  void {
    if(this.StudentMarkForm.invalid){
  
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
         },
         duration:3000
      });

if(this.StudentMarkForm.invalid) {

this.snackBar.openFromComponent(SnackBarMassageComponent,
  {

data:{
  massage:'Enter Feild Requird',
  iocn:'error_outline',
},
duration:3000
  });

}else { 
  let subject=new classData();
  subject.mark=this.StudentMarkForm.get('mark').value;
  subject.remark=this.StudentMarkForm.get('remark').value;
  subject.examId = this.examId;
  console.log(subject)
  this.studentService.LoadAllStudentMarks(subject)
  .subscribe(data=>{
    console.log(data);
    if(data.code ==201){ 
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Successfully Created',
          icon: 'check_circle_outline',
         },
         duration:3000
      });
     formDirective.resetForm();
     this.StudentMarkForm.reset();
    
    }
  });
  console.log(this.StudentMarkForm);

  }
}
let classd=new classData();
classd.classsId=this.StudentMarkForm.get('classsId').value;

console.log(classd);
this.studentService.SaveAllClassData(classd).subscribe(data=>
  
  {
console.log(data);
if(data.code ==201){
  this.snackBar.openFromComponent(SnackBarMassageComponent, {
    data: {
      message: 'Successfully Created',
      icon: 'check_circle_outline',
     },
     duration:3000
  });
 formDirective.resetForm();
 this.StudentMarkForm.reset();

}
});
console.log(this.StudentMarkForm);

}



 
 
 
}



