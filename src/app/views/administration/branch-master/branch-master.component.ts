import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { BranchDto } from '../administration';

@Component({
  selector: 'app-branch-master',
  templateUrl: './branch-master.component.html',
  styleUrls: ['./branch-master.component.scss']
})
export class BranchMasterComponent implements OnInit {
  branchForm: FormGroup;
  validation = new Regexpression();

  constructor(private fb: FormBuilder,
    private service: AdministrationService) { }

  ngOnInit() {
    this.branchForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
    });
  }

  submit() {
    let data = new BranchDto();
    data.branchName = this.branchForm.get('name').value;
    data.branchCode = this.branchForm.get('code').value;
    this.service.postBranch(data).subscribe(res => {
      console.log(res);
      if (res.code == 201) {
        this.branchForm.reset();
      }
    })
  }
}