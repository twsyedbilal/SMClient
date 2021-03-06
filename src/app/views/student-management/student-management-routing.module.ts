import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAdmissionComponent } from './create-admission/create-admission.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentAdmissionFormComponent } from './student-admission-form/student-admission-form.component';

const routes: Routes = [
  {
    path:'admission',
    component:CreateAdmissionComponent
  },
  {
    path:'view-student/:id',
    component:ViewStudentComponent
  },
  {
    path:'all-Students',
    component:StudentsTableComponent
  },
  {
    path:'student-Admission',
    component:StudentAdmissionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentManagementRoutingModule { }
