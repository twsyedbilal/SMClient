import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamDialogComponent } from './exam-dialog/exam-dialog.component';
import { ExamComponent } from './exam/exam.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatCardModule, MatListModule, MatTabsModule, MatSnackBarModule, MatTooltipModule, MatTableModule, MatPaginatorModule, MatSortModule, MatMenuModule, MatProgressSpinnerModule, MatDividerModule, MatDialogModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatStepperModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ExamListComponent,ExamDialogComponent, ExamComponent ],
  imports: [
    CommonModule,
    ExamRoutingModule,
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
    ExamDialogComponent ]
})
export class ExamModule { }
