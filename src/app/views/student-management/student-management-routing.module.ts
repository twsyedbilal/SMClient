import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAdmissionComponent } from './create-admission/create-admission.component';

const routes: Routes = [
  {
    path:'admission',
    component:CreateAdmissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentManagementRoutingModule { }
