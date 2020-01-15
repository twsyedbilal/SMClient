import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Dash1Component } from './dash1/dash1.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    Dash1Component
  ],
  imports: [
    MatIconModule,
   DashboardRoutingModule
  ]
})
export class DashboardModule { }
