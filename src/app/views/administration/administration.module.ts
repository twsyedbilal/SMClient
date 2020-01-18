import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatMenuModule, MatStepperModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatRadioModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatIconModule, MatTooltip, MatTooltipModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { LanguageMasterComponent } from './language-master/language-master.component';
import { CasteMasterComponent } from './caste-master/caste-master.component';
import { ReligionMasterComponent } from './religion-master/religion-master.component';
import { OccupationMasterComponent } from './occupation-master/occupation-master.component';
import { SocityMasterComponent } from './socity-master/socity-master.component';
import { NationalityMasterComponent } from './nationality-master/nationality-master.component';
import { MotherTongueMasterComponent } from './mother-tongue-master/mother-tongue-master.component';
import { BranchMasterComponent } from './branch-master/branch-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SchoolMasterComponent } from './school-master/school-master.component';
import { SchoolTypeMasterComponent } from './school-type-master/school-type-master.component';
import { PaymentMasterComponent } from './payment-master/payment-master.component';
import { ClassMasterComponent } from './class-master/class-master.component';
import { BookMasterComponent } from './book-master/book-master.component';
import { TableLayoutComponent } from './admin-table/table-layout/table-layout.component';
import { StudentTableComponent } from './admin-table/student-table/student-table.component';
import { SchoolTypeComponent } from './admin-table/school-type/school-type.component';
import { TableComponent } from './admin-table/table/table.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PaymentTableComponent } from './admin-table/payment-table/payment-table.component';
import { SchoolTableComponent } from './admin-table/school-table/school-table.component';
import { ClassTableComponent } from './admin-table/class-table/class-table.component';
import { BookTableComponent } from './admin-table/book-table/book-table.component';
import { ReligionTableComponent } from './admin-table/religion-table/religion-table.component';
import { CasteTableComponent } from './admin-table/caste-table/caste-table.component';
import { MotherTongueTableComponent } from './admin-table/mother-tongue-table/mother-tongue-table.component';
import { BranchTableComponent } from './admin-table/branch-table/branch-table.component';
import { OccupationTableComponent } from './admin-table/occupation-table/occupation-table.component';
import { SocietyTableComponent } from './admin-table/society-table/society-table.component';
import { NationalityTableComponent } from './admin-table/nationality-table/nationality-table.component';
import { SubCasteTableComponent } from './admin-table/sub-caste-table/sub-caste-table.component';

@NgModule({
  declarations: [LayoutComponent, LanguageMasterComponent,
      CasteMasterComponent, ReligionMasterComponent, 
      OccupationMasterComponent, SocityMasterComponent,
      NationalityMasterComponent, MotherTongueMasterComponent, 
      BranchMasterComponent, SchoolMasterComponent, SchoolTypeMasterComponent,
       PaymentMasterComponent, ClassMasterComponent, BookMasterComponent,TableLayoutComponent, StudentTableComponent, SchoolTypeComponent, TableComponent, PaymentTableComponent, SchoolTableComponent, ClassTableComponent, BookTableComponent, ReligionTableComponent, CasteTableComponent, MotherTongueTableComponent, BranchTableComponent, OccupationTableComponent, SocietyTableComponent, NationalityTableComponent, SubCasteTableComponent],
  imports: [
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    MatListModule,
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
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
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
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
