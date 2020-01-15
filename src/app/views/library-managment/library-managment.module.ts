import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryManagmentRoutingModule } from './library-managment-routing.module';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    LibraryManagmentRoutingModule
  ]
})
export class LibraryManagmentModule { }
