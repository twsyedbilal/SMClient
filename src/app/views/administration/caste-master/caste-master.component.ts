import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { CasteDto } from '../administration';

@Component({
  selector: 'app-caste-master',
  templateUrl: './caste-master.component.html',
  styleUrls: ['./caste-master.component.scss']
})
export class CasteMasterComponent implements OnInit {
  casteForm:FormGroup;
  validation=new Regexpression();
  
  constructor(private fb:FormBuilder,private service:AdministrationService) { }

  ngOnInit() {
  this.casteForm=this.fb.group({
    casteName:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
    code:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
    });
  }

  submit(){
    let casteData=new CasteDto();
    casteData.casteName=this.casteForm.get('casteName').value;
    casteData.casteCode=this.casteForm.get('code').value;
    this.service.postCaste(casteData)
    .subscribe(res=>{
      console.log(res);
      if(res.code==201){
        this.casteForm.reset();
      }
    })

  }

}
