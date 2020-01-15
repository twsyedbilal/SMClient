import { Component, OnInit } from '@angular/core';
import { OccupationDto } from '../administration';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import { Regexpression } from 'app/views/utils/regExp';

@Component({
  selector: 'app-occupation-master',
  templateUrl: './occupation-master.component.html',
  styleUrls: ['./occupation-master.component.scss']
})
export class OccupationMasterComponent implements OnInit {
  occupationForm: FormGroup;
  validation = new Regexpression();

  constructor(private fb: FormBuilder,
    private service: AdministrationService) { }

  ngOnInit() {
    this.occupationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
    });
  }

  submit() {
    let data = new OccupationDto();
    data.occupationName = this.occupationForm.get('name').value;
    data.occupationCode = this.occupationForm.get('code').value;
    this.service.postOccupation(data).subscribe(res => {
      console.log(res);
      if (res.code == 201) {
        this.occupationForm.reset();
      }
    })
  }
}
