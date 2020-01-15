import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dash1Component } from './dash1/dash1.component';
const routes: Routes = [
  {
    path:'data-dash',
    component:Dash1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
