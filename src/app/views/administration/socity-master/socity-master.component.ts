import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { SocietyDto, Master } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-socity-master',
  templateUrl: './socity-master.component.html',
  styleUrls: ['./socity-master.component.scss']
})
export class SocityMasterComponent implements OnInit {

  societyForm: FormGroup;
  validation = new Regexpression();
  tableshow:boolean=false;
  constructor(private fb: FormBuilder,
    private service: AdministrationService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.societyForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
    });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Society List'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }



  submit(form: FormGroup, formDirective: FormGroupDirective): void {
    if(this.societyForm.invalid){
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
         },
         duration:3000
      });
 
    }else{
  
    let data = new Master();
    data.name = this.societyForm.get('name').value;
    data.code = this.societyForm.get('code').value;
    this.service.postSociety(data).subscribe(res => {
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
        this.societyForm.reset();
      
        }
     });
    }
  }

}
