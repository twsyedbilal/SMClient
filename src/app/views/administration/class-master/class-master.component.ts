import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { ClassDto } from '../administration';

@Component({
  selector: 'app-class-master',
  templateUrl: './class-master.component.html',
  styleUrls: ['./class-master.component.scss']
})
export class ClassMasterComponent implements OnInit {
  classForm: FormGroup;
  validation = new Regexpression();
  constructor(private service: AdministrationService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.classForm = this.fb.group({
      cName: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      cCode: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]],
      cFees: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
    })
  }

  submitClassForm() {
    let classData = new ClassDto();
    classData.className = this.classForm.get('cName').value;
    classData.code = this.classForm.get('cCode').value;
    classData.fees = this.classForm.get('cFees').value;
    this.service.postClass(classData)
      .subscribe(res => {
        if (res.code == 201) {
          this.classForm.reset();
        }
      })

  }

}
