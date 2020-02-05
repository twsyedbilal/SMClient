import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdministrationService } from '../../administration.service';
import { updateLocale } from 'moment';
import { Master } from '../../administration';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  formData:any;
  form:FormGroup;
  response:number
  validation=new Regexpression();
constructor(public dialogRef: MatDialogRef<DialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: { id: number, status: string, },
            private fb:FormBuilder,
            private router:Router,
            private snackBar: MatSnackBar,
            private activerouter:ActivatedRoute,
            private service:AdministrationService) { }

  ngOnInit() {
    console.log(this.data);

    if (this.data != null) {
      switch (this.data.status) {

        case 'School Type':
          console.log('school type switch');
          this.service.getSchoolTypeById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'Caste':
          console.log('Caste');
          this.service.getCasteById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'payment':
          console.log('payment');
          this.service.getPaymentById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'Book':
          console.log('book')
          this.service.getBookFindById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'Religion':
          console.log('religion')
          this.service.getReligionById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'Caste':
          console.log('Caste');
          this.service.getCasteById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;
         
        case 'Mother Tongue':
          console.log('MT');
          this.service.getMTById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'Branch':
          console.log('Branch');
          this.service.getBranchById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'Occupation':
          console.log('Occupation');
          this.service.getOccupationDataById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'Society':
          console.log('Society');
          this.service.getSocietyById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        case 'Nationality':
          console.log('nationality');
          this.service.getNationalityById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
          this.loadData();
          break;

        
        case 'subCaste':
            console.log('subCaste');
            this.service.getSubCasteById(this.data.id).subscribe(res => { this.formData = res.data; console.log(this.formData); });
           this.loadData();
            break;
  

      }
    }
  }

      loadData(){
        setTimeout(()=>{
          this.loadForm();
      },1000);
}
  


loadForm(){
   
  this.form=this.fb.group({
      name:[this.formData.name,[Validators.required,Validators.pattern(this.validation.onlyAlphabet)]],
      code:[this.formData.code,[Validators.required,Validators.pattern(this.validation.onlyNumber)]]
  });

  }



    updateForm(){
        let masterData=new Master();
        masterData.id=this.data.id;
        masterData.name=this.form.get('name').value;
        masterData.code=this.form.get('code').value;
        switch (this.data.status) {

          case 'School Type':
            console.log('school type switch');
            this.service.schoolType(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'Caste':
            console.log('Caste');
            this.service.postCaste(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'payment':
            console.log('payment');
            this.service.payment(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'Book':
            console.log('book')
            this.service.postBook(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'Religion':
            console.log('religion')
            this.service.postReligion(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'Caste':
            console.log('Caste')
            this.service.postCaste(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
            case 'subCaste':
              console.log('subCaste')
              this.service.postSubCasteSave(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
              break;
    
            case 'Mother Tongue':
            console.log('MT')
            this.service.postMT(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'Branch':
            console.log('Branch')
            this.service.postBranch(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'Occupation':
            console.log('Occupation')
            this.service.postOccupation(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'Society':
            console.log('Society')
            this.service.postSociety(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
          case 'Nationality':
            console.log('nationality')
            this.service.postNationality(masterData).subscribe(res => { this.response = res.code; console.log(this.response); });
            break;
  
        }

      setTimeout(()=>{
        this.dialogRef.close(this.response);
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
             message: 'Successfully Updated',
             icon: 'check_circle_outline',
            },
            duration:2000
          });
        },1500)
      
    }
}
