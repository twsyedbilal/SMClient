import { Component, OnInit } from '@angular/core';
import { OccupationDto, Master } from '../administration';
import { Validators, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import { Regexpression } from 'app/views/utils/regExp';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-occupation-master',
  templateUrl: './occupation-master.component.html',
  styleUrls: ['./occupation-master.component.scss']
})
export class OccupationMasterComponent implements OnInit {
  occupationForm: FormGroup;
  validation = new Regexpression();
  tableshow:boolean=false;
  constructor(private fb: FormBuilder,
    private service: AdministrationService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.occupationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
    });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Occupation List'){
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
      let data = new Master();
      data.name = this.occupationForm.get('name').value;
      data.code = this.occupationForm.get('code').value;
      this.service.postOccupation(data).subscribe(res => {
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
