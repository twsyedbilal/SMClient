import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { NationalityDto } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-nationality-master',
  templateUrl: './nationality-master.component.html',
  styleUrls: ['./nationality-master.component.scss']
})
export class NationalityMasterComponent implements OnInit {
  nationalityForm:FormGroup;
  validation=new Regexpression();
  tableshow:boolean=false;
  constructor(private fb:FormBuilder,
     private service:AdministrationService,
     private snackBar: MatSnackBar
     ) { }

 ngOnInit() {
   this.nationalityForm=this.fb.group({
     name:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
     code:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
   });
 }


 public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  console.log(tabChangeEvent);
    if(tabChangeEvent.tab.textLabel=='Nationality List'){
      this.tableshow=true;
    }else{
      this.tableshow=false;
    }
}


  submit(form: FormGroup, formDirective:FormGroupDirective): void{
      if(this.nationalityForm.invalid){
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Enter Field required',
            icon: 'error_outline',
           },
           duration:3000
        });
      
      }else{
        let data=new NationalityDto();
        data.name=this.nationalityForm.get('name').value;
        data.code=this.nationalityForm.get('code').value;
    
        this.service.postNationality(data)
        .subscribe(data=>{
          console.log(data);
          if(data.code=='201'){
            this.snackBar.openFromComponent(SnackBarMassageComponent, {
              data: {
                message: 'Successfully Created',
                icon: 'check_circle_outline',
               },
               duration:3000
            });
            formDirective.resetForm();
            this.nationalityForm.reset();
          }
        });
      }
    }

}
