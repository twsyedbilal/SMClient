import { Component, OnInit } from '@angular/core';
import { Regexpression } from 'app/views/utils/regExp';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import { MotherTongueDto } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-mother-tongue-master',
  templateUrl: './mother-tongue-master.component.html',
  styleUrls: ['./mother-tongue-master.component.scss']
})
export class MotherTongueMasterComponent implements OnInit {
   mTForm:FormGroup;
   tableshow:boolean=false;
   validation=new Regexpression();
  
   constructor(private fb:FormBuilder,
      private service:AdministrationService,
      private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.mTForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
      code:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
    });
  }


  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Mother Tongue List'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }
  

    submit(data:FormGroup, formDirective: FormGroupDirective): void{
      if(this.mTForm.invalid){
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Enter Field required',
            icon: 'error_outline',
           },
           duration:3000
        });
      
      }else{
        let mt=new MotherTongueDto();
        mt.name=this.mTForm.get('name').value;
        mt.code=this.mTForm.get('code').value;
        this.service.postMT(mt).subscribe(res=>{
          console.log(res);
          if(res.code==201){
            this.snackBar.openFromComponent(SnackBarMassageComponent, {
              data: {
                message: 'Successfully Created',
                icon: 'check_circle_outline',
               },
               duration:3000
            });
      
            formDirective.resetForm();
            this.mTForm.reset();
          }
        })
    }
  }

}
