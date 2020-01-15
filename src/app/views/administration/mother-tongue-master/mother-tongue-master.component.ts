import { Component, OnInit } from '@angular/core';
import { Regexpression } from 'app/views/utils/regExp';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import { MotherTongueDto } from '../administration';

@Component({
  selector: 'app-mother-tongue-master',
  templateUrl: './mother-tongue-master.component.html',
  styleUrls: ['./mother-tongue-master.component.scss']
})
export class MotherTongueMasterComponent implements OnInit {
   mTForm:FormGroup;
   validation=new Regexpression();
  
   constructor(private fb:FormBuilder,
      private service:AdministrationService) { }

  ngOnInit() {
    this.mTForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
      code:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
    });
  }

    submit(){
      let data=new MotherTongueDto();
      data.name=this.mTForm.get('name').value;
      data.code=this.mTForm.get('code').value;
      this.service.postMT(data).subscribe(res=>{
        console.log(res);
        if(res.code==201){
          this.mTForm.reset();
        }
      })
}

}
