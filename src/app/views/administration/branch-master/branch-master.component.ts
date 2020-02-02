import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { BranchDto, Master } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-branch-master',
  templateUrl: './branch-master.component.html',
  styleUrls: ['./branch-master.component.scss']
})
export class BranchMasterComponent implements OnInit {
  branchForm: FormGroup;
  validation = new Regexpression();
  tableshow:boolean=false;

  constructor(private fb: FormBuilder,
    private service: AdministrationService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.branchForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
    });
  }




  
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Branch Table'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }


  submit({ form, formDirective }: { form: FormGroup; formDirective: FormGroupDirective; }): void {
    if(this.branchForm.invalid){
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
         },
         duration:3000
      });
    }
    else{
      let data = new Master();
    data.name = this.branchForm.get('name').value;
    data.code = this.branchForm.get('code').value;
    this.service.postBranch(data).subscribe(res => {
      console.log(res);
      if (res.code == 201) {
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Successfully Created',
            icon: 'check_circle_outline',
           },
           duration:3000
        });
        formDirective.resetForm();
        this.branchForm.reset();
      }
    });
  }
 }
    
}