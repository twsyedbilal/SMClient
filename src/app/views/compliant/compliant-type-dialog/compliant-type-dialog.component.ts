import { Component, OnInit, Inject } from '@angular/core';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';
import { ComplianttypesDto } from '../complianttypesDto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { CompliantserviceService } from '../compliantservice.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-compliant-type-dialog',
  templateUrl: './compliant-type-dialog.component.html',
  styleUrls: ['./compliant-type-dialog.component.scss']
})
export class CompliantTypeDialogComponent implements OnInit {
  updatecomplianttypelForm:FormGroup;
  validation=new Regexpression();
  ctDto:ComplianttypesDto;  
  constructor(private fb:FormBuilder, 
     private compliantService:CompliantserviceService,
     private snackBar: MatSnackBar,
     public dialogRef: MatDialogRef<CompliantTypeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data   
     ) { }

  ngOnInit() {

    this.compliantService.getCompliantTypesById(this.data)
    .subscribe(res=>{
      this.ctDto=res.data;
     
      this.updatecomplianttypelForm=this.fb.group({
        name:[this.ctDto.name,[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
        code:[this.ctDto.code,[Validators.required,Validators.pattern(this.validation.onlyNumber)]],
     
        });
      });
   }

    update(){
      let ctDto=new ComplianttypesDto();
      ctDto.id=this.data;
      ctDto.name=this.updatecomplianttypelForm.get('name').value;
      ctDto.code=this.updatecomplianttypelForm.get('code').value;
      this.compliantService.submitcomplianttype(ctDto).subscribe(res=>{
        console.log(res);
        if(res.code==201){
          this.dialogRef.close(res.code);
          this.snackBar.openFromComponent(SnackBarMassageComponent, {
            data: {
              message: 'Successfully Updated',
              icon: 'check_circle_outline',
             },
             duration:3000
          });
         
        }
      });
    }
  }
