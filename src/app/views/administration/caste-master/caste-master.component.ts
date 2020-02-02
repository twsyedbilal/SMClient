import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { CasteDto, Master } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-caste-master',
  templateUrl: './caste-master.component.html',
  styleUrls: ['./caste-master.component.scss']
})
export class CasteMasterComponent implements OnInit {
  casteForm:FormGroup;
  tableshow:boolean=false;
  validation=new Regexpression();
  
  constructor(private fb:FormBuilder,
    private service:AdministrationService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  this.casteForm=this.fb.group({
    casteName:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
    code:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
    });
  }


  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Caste List'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }



  submit(data: FormGroup, formDirective: FormGroupDirective): void{
      if(this.casteForm.invalid){
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Enter Field required',
            icon: 'error_outline',
           },
           duration:3000
        });
      
      }else{
        let casteData=new Master();
        casteData.name=this.casteForm.get('casteName').value;
        casteData.code=this.casteForm.get('code').value;
        this.service.postCaste(casteData)
        .subscribe(res=>{
          console.log(res);
          if(res.code==201){
            this.snackBar.openFromComponent(SnackBarMassageComponent, {
              data: {
                message: 'Successfully Updated',
                icon: 'check_circle_outline',
               },
               duration:3000
            });
            formDirective.resetForm();
            this.casteForm.reset();
          }
        });
      }
    }

}
