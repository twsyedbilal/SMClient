import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule, MatStepperModule, MatFormFieldModule,
  MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatRadioModule,
  MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatIconModule,
  MatTooltip, MatTooltipModule, MatDialogModule, MatCardModule, MatListModule, MatTabsModule, MatSnackBarModule, MatDividerModule, MatAutocomplete, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule, MatExpansionModule, MatGridListModule, MatNativeDateModule, MatProgressBarModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatTreeModule
} from '@angular/material';
import { CompliantModuleRoutingModule } from '../compliant/compliant-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MarkSlaveComponent } from './markslave-table/markslave.component';
import { MarkSlaveModuleRoutingModule } from './markslave-module-routing.module';
import { MarkslaveListComponent } from './markslave-list/markslave-list.component';
import { MarkslaveDialogComponent } from './markslave-dialog/markslave-dialog.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ MarkSlaveComponent, MarkslaveListComponent, MarkslaveDialogComponent],
  imports: [ 
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
   // MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatToolbarModule,
    
     

    MarkSlaveModuleRoutingModule,
   
  ],
  entryComponents: [
    MarkslaveDialogComponent ]
})
export class MarkslaveModule { }
