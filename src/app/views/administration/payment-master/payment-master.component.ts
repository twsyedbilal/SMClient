import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { PaymentTypeDto, Master } from '../administration';
import { AdministrationService } from '../administration.service';
import { ActivatedRoute } from '@angular/router';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-payment-master',
  templateUrl: './payment-master.component.html',
  styleUrls: ['./payment-master.component.scss']
})
export class PaymentMasterComponent implements OnInit {
  paymentTypeForm: FormGroup;
  validation = new Regexpression();
  id: number;
  tableshow:boolean=false;

  constructor(private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private service: AdministrationService,
    private snackBar: MatSnackBar
    ) { }
//Payment Type Code
  ngOnInit() {
      this.paymentTypeForm = this.fb.group({
        paymentType: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
        code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
      });
   
    
  }

  
public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  console.log(tabChangeEvent);
    if(tabChangeEvent.tab.textLabel=='Payment Type List'){
      this.tableshow=true;
    }else{
      this.tableshow=false;
    }
}


  submitPaymentType(data: FormGroup, formDirective: FormGroupDirective): void {
    console.log('pay,emt')

    if(this.paymentTypeForm.invalid){
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
         },
         duration:3000
      });
             
    }else{
      let payment = new Master();
      payment.name = this.paymentTypeForm.get('paymentType').value;
      payment.code = this.paymentTypeForm.get('code').value;
  
        this.service.payment(payment)
          .subscribe(res => {
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
              this.paymentTypeForm.reset();
            }
          });
        }
      }
    
  }
