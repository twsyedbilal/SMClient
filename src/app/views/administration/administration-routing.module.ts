import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LanguageMasterComponent } from './language-master/language-master.component';
import { ReligionMasterComponent } from './religion-master/religion-master.component';
import { BranchMasterComponent } from './branch-master/branch-master.component';
import { CasteMasterComponent } from './caste-master/caste-master.component';
import { MotherTongueMasterComponent } from './mother-tongue-master/mother-tongue-master.component';
import { SocityMasterComponent } from './socity-master/socity-master.component';
import { OccupationMasterComponent } from './occupation-master/occupation-master.component';
import { NationalityMasterComponent } from './nationality-master/nationality-master.component';
import { BookListComponent } from '../library-managment/book-list/book-list.component';
import { SchoolMasterComponent } from './school-master/school-master.component';
import { SchoolTypeMasterComponent } from './school-type-master/school-type-master.component';
import { PaymentMasterComponent } from './payment-master/payment-master.component';
import { ClassMasterComponent } from './class-master/class-master.component';
import { BookMasterComponent } from './book-master/book-master.component';
import { TableLayoutComponent } from './admin-table/table-layout/table-layout.component';
import { StudentTableComponent } from './admin-table/student-table/student-table.component';
import { SchoolTypeComponent } from './admin-table/school-type/school-type.component';
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
import { SubCasteMasterComponent } from './sub-caste-master/sub-caste-master.component';

const routes: Routes = [
  {
    path:'master-layout',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'school',
        pathMatch:'full'
      },
      {
        path:'schoolType',
        component:SchoolTypeMasterComponent
      },
      {
        path:'religion',
        component:ReligionMasterComponent,
      },
      {
        path:'branch',
        component:BranchMasterComponent,
      },
      {
        path:'nationality',
        component:NationalityMasterComponent,
      },
      {
        path:'caste',
        component:CasteMasterComponent,
      },
      {
          path:'SubCaste',
          component:SubCasteMasterComponent
      },
      {
        path:'mothertongue',
        component:MotherTongueMasterComponent,
      },
      {
        path:'society',
        component:SocityMasterComponent,
      },
      {
        path:'occupation',
        component:OccupationMasterComponent
      },
      {
        path:'book',
        component:BookMasterComponent
      },
      {
        path:'school',
        component:SchoolMasterComponent
      },
      {
        path:'payment',
        component:PaymentMasterComponent
      },
      {
        path:'class',
        component:ClassMasterComponent
      },
      {
        path:'book',
        component:BookMasterComponent
      },
    ]
  },
  {
    path:'table-layout',
    component:TableLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'schoolType-list',
        pathMatch:'full'
      },
      {
          path:'school-table',
          component:SchoolTableComponent
      },
      {
        path:'schoolType-list',
        component: SchoolTypeComponent
      },
      {
        path:'paymentType-list',
        component:PaymentTableComponent
      },
      {
        path:'class-list',
        component:ClassTableComponent
      },
      {
        path:'book-list',
        component:BookTableComponent
      },
      {
        path:'religion-list',
        component:ReligionTableComponent
      },
      {
        path:'caste-list',
        component:CasteTableComponent
      },
      {
        path:'mt-list',
        component:MotherTongueTableComponent
      },
      {
        path:'branch-list',
        component:BranchTableComponent
      },
      {
        path:'occupation-list',
        component:OccupationTableComponent
      },
      {
        path:'society-list',
        component:SocietyTableComponent
      },
      {
        path:'nationality-list',
        component:NationalityTableComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
