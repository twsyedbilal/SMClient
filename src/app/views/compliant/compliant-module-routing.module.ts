import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplianttypesComponent } from './complianttypes/complianttypes.component';
import { CompliantComponent } from './compliant/compliant.component';
import { CompliantlistComponent } from './compliantlist/compliantlist.component';

const routes: Routes = [

  {
    path: 'type-master',
    component: ComplianttypesComponent
  },
  {
    path: 'compliants',
    component: CompliantComponent
  },
  {
    path: 'compliantlist',
    component: CompliantlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompliantModuleRoutingModule { }
