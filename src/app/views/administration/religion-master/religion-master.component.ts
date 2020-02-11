import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import { Regexpression } from 'app/views/utils/regExp';
import { ReligionDto, Master } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-religion-master',
  templateUrl: './religion-master.component.html',
  styleUrls: ['./religion-master.component.scss']
})
export class ReligionMasterComponent implements OnInit {
  religionForm:FormGroup;
  tableshow:boolean=false;
  validation=new Regexpression();
  constructor(private service:AdministrationService,
            private fb:FormBuilder,
            private snackBar: MatSnackBar
            ) { }

  ngOnInit() {
    this.religionForm=this.fb.group(
      {
        religionName:['',[Validators.required]],
        code:['',[Validators.required]]
      });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Religion List'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }



  submit(data: FormGroup, formDirective: FormGroupDirective): void{
    if(this.religionForm.invalid){
      this.snackBar.openFromComponent(SnackBarMassageComponent, {
        data: {
          message: 'Enter Field required',
          icon: 'error_outline',
         },
         duration:3000
      });
    
    }
    else{
      let religionData=new Master();
      religionData.name=this.religionForm.get('religionName').value;
      religionData.code=this.religionForm.get('code').value;
      this.service.postReligion(religionData)
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
          this.religionForm.reset();
        }
      });
    }
  }
}
