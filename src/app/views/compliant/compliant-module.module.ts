import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule, MatStepperModule, MatFormFieldModule,
  MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatRadioModule,
  MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatIconModule,
  MatTooltip, MatTooltipModule, MatDialogModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CompliantModuleRoutingModule } from './compliant-module-routing.module';
import { ComplianttypesComponent } from './complianttypes/complianttypes.component';
import { CompliantComponent } from './compliant/compliant.component';
import { CompliantlistComponent } from './compliantlist/compliantlist.component';
import { DialogcompliantComponent } from './dialogcompliant/dialogcompliant.component';

@NgModule({
  declarations: [ComplianttypesComponent, CompliantComponent,
     CompliantlistComponent,
     DialogcompliantComponent ],
  imports: [
    CommonModule,
    MatSidenavModule,
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
    FormsModule,

    CompliantModuleRoutingModule
  ]
})
export class CompliantModuleModule { }
