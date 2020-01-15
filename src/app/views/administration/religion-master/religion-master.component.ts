import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import { Regexpression } from 'app/views/utils/regExp';
import { ReligionDto } from '../administration';

@Component({
  selector: 'app-religion-master',
  templateUrl: './religion-master.component.html',
  styleUrls: ['./religion-master.component.scss']
})
export class ReligionMasterComponent implements OnInit {
  religionForm:FormGroup;
  validation=new Regexpression();
  constructor(private service:AdministrationService,
            private fb:FormBuilder) { }

  ngOnInit() {
    this.religionForm=this.fb.group(
      {
        religionName:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
        code:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
      });
  }

  submit(){
    let religionData=new ReligionDto();
    religionData.religionName=this.religionForm.get('religionName').value;
    religionData.religionCode=this.religionForm.get('code').value;
    this.service.postReligion(religionData)
    .subscribe(res=>{
      console.log(res);
      if(res.code==201){
        this.religionForm.reset();
      }
    })
  }
}
