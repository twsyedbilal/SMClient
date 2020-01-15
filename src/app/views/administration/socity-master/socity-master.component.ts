import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { SocietyDto } from '../administration';

@Component({
  selector: 'app-socity-master',
  templateUrl: './socity-master.component.html',
  styleUrls: ['./socity-master.component.scss']
})
export class SocityMasterComponent implements OnInit {

  societyForm: FormGroup;
  validation = new Regexpression();

  constructor(private fb: FormBuilder,
    private service: AdministrationService) { }

  ngOnInit() {
    this.societyForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
    });
  }

  submit() {
    let data = new SocietyDto();
    data.societyName = this.societyForm.get('name').value;
    data.code = this.societyForm.get('code').value;
    this.service.postSociety(data).subscribe(res => {
      console.log(res);
      if (res.code == 201) {
        this.societyForm.reset();
      }
    })
  }

}
