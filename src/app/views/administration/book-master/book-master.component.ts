import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexpression } from 'app/views/utils/regExp';
import { BookDto } from '../administration';

@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.scss']
})
export class BookMasterComponent implements OnInit {
  bookForm: FormGroup;
  validation = new Regexpression();
  constructor(private fb: FormBuilder,
    private service: AdministrationService) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      bookName: ['', [Validators.required, Validators.pattern(this.validation.onlyAlphabet)]],
      code: ['', [Validators.required, Validators.pattern(this.validation.onlyNumber)]]
    });

  }

    submit(){
      let booksData=new BookDto();
      booksData.bookName=this.bookForm.get('bookName').value;
      booksData.bookCode=this.bookForm.get('code').value;
      this.service.postBook(booksData)
      .subscribe(res=>{
        console.log(res);
        if(res.code==201){
          this.bookForm.reset();  
        }
      })
    }
}
