import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { AdministrationService } from '../administration.service';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { Master, SubCasteDto } from '../administration';

@Component({
  selector: 'app-sub-caste-master',
  templateUrl: './sub-caste-master.component.html',
  styleUrls: ['./sub-caste-master.component.scss']
})
export class SubCasteMasterComponent implements OnInit {
  subCasteform:FormGroup;
  tableshow:boolean=false;
  validation=new Regexpression();
  constructor(private service:AdministrationService,
            private fb:FormBuilder,
            private snackBar: MatSnackBar
            ) { }

  ngOnInit() {
    this.subCasteform=this.fb.group({

        name:['',[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
        code:['',[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
      });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='SubCaste List'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }
  submit(data: FormGroup, formDirective: FormGroupDirective): void{
    if(this.subCasteform.invalid){
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
         },
         duration:3000
      });
    
    }
    else{
      let subCaste=new Master();
      subCaste.name=this.subCasteform.get('name').value;
      subCaste.code=this.subCasteform.get('code').value;
      this.service.postSubCasteSave(subCaste)
      .subscribe(res=>{
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
          this.subCasteform.reset();
        }
      });
    }
  }

}
