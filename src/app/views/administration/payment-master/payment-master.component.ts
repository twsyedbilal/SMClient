import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { PaymentTypeDto } from '../administration';
import { AdministrationService } from '../administration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-master',
  templateUrl: './payment-master.component.html',
  styleUrls: ['./payment-master.component.scss']
})
export class PaymentMasterComponent implements OnInit {
  paymentTypeForm: FormGroup;
  validation = new Regexpression();
  id: number;

  constructor(private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private service: AdministrationService) { }
//Payment Type Code
  ngOnInit() {
    this.activeRoute.queryParams
      .subscribe(x => {
        console.log(x);
        this.id = x.id;
        console.log(this.id);
      });

    if (this.id != undefined) {
      this.service.getPaymentById(this.id)
        .subscribe(res => {
          console.log(res);

          this.paymentTypeForm = this.fb.group({
            paymentType: [res.data.paymentTypeName, [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
            code: [res.data.paymentTypeCode, [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
          });

        });
    }else{
      this.paymentTypeForm = this.fb.group({
        paymentType: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
        code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
      });
   
    }
  }

  submitPaymentType() {
    console.log('pay,emt')
    let payment = new PaymentTypeDto();
    payment.payementTypeName = this.paymentTypeForm.get('paymentType').value;
    payment.payementTypeCode = this.paymentTypeForm.get('code').value;

    if (this.id != undefined) {
      payment.id = this.id;
      this.service.payment(payment)
        .subscribe(res => {
          console.log(res);
          if (res.code == 201) {
            this.paymentTypeForm.reset();
          }
        });

    } 
    else {
      this.service.payment(payment)
        .subscribe(res => {
          console.log(res);
          if (res.code == 201) {
            this.paymentTypeForm.reset();
          }
        });
      }
    }
  }
