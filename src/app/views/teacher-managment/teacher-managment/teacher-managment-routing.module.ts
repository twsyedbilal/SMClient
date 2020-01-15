import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherCreationComponent } from './teacher-creation/teacher-creation.component';

const routes: Routes = [
  {
    path:'create-teacher',
    component:TeacherCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherManagmentRoutingModule { }
