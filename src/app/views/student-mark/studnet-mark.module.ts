import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudnetMarkRoutingModule } from './studnet-mark-routing.module';
import { StudentMarkComponent } from './student-mark.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatCardModule, MatListModule, MatTabsModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatMenuModule, MatProgressSpinnerModule, MatDividerModule, MatDialogModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatStepperModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule, MatExpansionModule, MatGridListModule, MatNativeDateModule, MatProgressBarModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatTreeModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [ StudentMarkComponent, StudentListComponent, StudentDialogComponent],
  imports: [
    CommonModule,
    StudnetMarkRoutingModule,
    CommonModule,
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
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatToolbarModule,
    //
   
    
  
  ]
})
export class StudnetMarkModule { }
