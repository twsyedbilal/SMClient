import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { MatCardModule, MatListModule, MatTabsModule, MatSnackBarModule, MatTooltipModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule, MatMenuModule, MatProgressSpinnerModule, MatDividerModule, MatToolbarModule, MatDialogModule, MatButtonModule, MatInputModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatFormFieldModule, MatStepperModule, MatRippleModule, MatPaginator } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { 
  PerfectScrollbarModule, 
  PERFECT_SCROLLBAR_CONFIG, 
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';
import { SharedModule } from 'app/shared/shared.module';
import { SubjectlistComponent } from '../subject-list/subjectlist.component';
import { SubjectDialogComponent } from '../subject-dialog/subject-dialog.component';
import { DeleteComponent } from './delete/delete.component';




@NgModule({
  declarations: [ SubjectComponent,SubjectlistComponent, SubjectDialogComponent, DeleteComponent],
  imports: [
   
    SharedModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    CommonModule,
    SubjectRoutingModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatToolbarModule,
    
   
  ],
  entryComponents: [
    SubjectDialogComponent, ]
})
export class SubjectModule { }
