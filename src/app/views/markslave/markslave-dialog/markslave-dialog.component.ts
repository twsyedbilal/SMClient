import { Component, OnInit, Inject } from '@angular/core';
import { markslavedto, admissionData } from '../MarkSlaveDto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { ExamService } from 'app/views/exam.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { MarkslaveService } from '../markslave.service';

@Component({
  selector: 'app-markslave-dialog',
  templateUrl: './markslave-dialog.component.html',
  styleUrls: ['./markslave-dialog.component.scss']
})
export class MarkslaveDialogComponent implements OnInit {
  updateschoolForm:FormGroup;
  validation=new Regexpression();
  admissiondto:admissionData[];
  markslave :markslavedto;
  constructor(private fb:FormBuilder, 
     private examService:MarkslaveService,
     private snackBar: MatSnackBar,
     public dialogRef: MatDialogRef<MarkslaveDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data   
     ) { }

  ngOnInit() {
    this.getDatafAll();{}

    this.examService.getMarkSlaveById(this.data)
    .subscribe(res=>{
      this.markslave=res.data;
     
      this.updateschoolForm=this.fb.group({
       mark:[this.markslave.mark],
       remark:[this.markslave.remark],
       admission:[this.markslave.admission],       
        });
        
      });
     
     
     
     
 
 // getDatafAll() 
 {
    
    
    
  }
   }
  getDatafAll() {
    this.examService.findAllStudentName().subscribe(res=>{this.admissiondto=res.data;});

      console.log(this.admissiondto);
  }
   

    update(){
      let markslave=new markslavedto();
      markslave.id=this.data;
      markslave.mark=this.updateschoolForm.get('mark').value;
      markslave.remark=this.updateschoolForm.get('remark').value;
      markslave.admission=this.updateschoolForm.get('admission').value;
console.log(this.markslave);
      
      this.examService.submitMarkSlave(markslave).subscribe(res=>{
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