import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { ClassDto } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-class-master',
  templateUrl: './class-master.component.html',
  styleUrls: ['./class-master.component.scss']
})
export class ClassMasterComponent implements OnInit {
  classForm: FormGroup;
  tableshow:boolean=false;
  
  validation = new Regexpression();
  constructor(private service: AdministrationService,
    private fb: FormBuilder,
    
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.classForm = this.fb.group({
      cName: ['', [Validators.required]],
      cCode: ['', [Validators.required]],
      cFees: ['', [Validators.required]]
    })
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Class Table'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }
  


  submitClassForm(data: FormGroup, formDirective: FormGroupDirective): void {
    if(this.classForm.invalid){
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
         },
         duration:3000
      });
    
    }else{
      let classData = new ClassDto();
    classData.className = this.classForm.get('cName').value;
    classData.code = this.classForm.get('cCode').value;
    classData.fees = this.classForm.get('cFees').value;
    this.service.postClass(classData)
      .subscribe(res => {
        if (res.code == 201) {
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Created',
              icon: 'check_circle_outline',
             },
             duration:3000
          });
          formDirective.resetForm();
          this.classForm.reset();
         
        }
      })

    }
    
  }

}
