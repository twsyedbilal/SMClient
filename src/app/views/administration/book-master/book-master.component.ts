import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { BookDto, Master } from '../administration';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { SnackBarMassageComponent } from 'app/views/snack-bar-massage/snack-bar-massage.component';

@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.scss']
})
export class BookMasterComponent implements OnInit {
  bookForm: FormGroup;
  tableshow:boolean=false;
  validation = new Regexpression();
  constructor(private fb: FormBuilder,
    private service: AdministrationService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      bookName: ['', [Validators.required]],
      code: ['', [Validators.required]]
    });

  }


  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
      if(tabChangeEvent.tab.textLabel=='Books List'){
        this.tableshow=true;
      }else{
        this.tableshow=false;
      }
  }

    submit(data: FormGroup, formDirective: FormGroupDirective): void{
      if(this.bookForm.invalid){
        this.snackBar.openFromComponent(SnackBarMassageComponent, {
          data: {
            message: 'Enter Field required',
            icon: 'error_outline',
           },
           duration:3000
        });
      
      }
      else{
        let booksData=new Master();
         booksData.name=this.bookForm.get('bookName').value;
        booksData.code=this.bookForm.get('code').value;
        this.service.postBook(booksData)
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
            this.bookForm.reset();  
            }
         });
      }
    }
  }
