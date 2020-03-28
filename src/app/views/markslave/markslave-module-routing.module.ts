import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkSlaveComponent } from './markslave-table/markslave.component';

const routes: Routes = [

  {
    path: 'markslave',
    component: MarkSlaveComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export  class MarkSlaveModuleRoutingModule { }
