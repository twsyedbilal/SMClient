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
        path:'schoolType-list',
        component: SchoolTypeComponent
      },
      {
        path:'paymentType-list',
        component:PaymentTableComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
