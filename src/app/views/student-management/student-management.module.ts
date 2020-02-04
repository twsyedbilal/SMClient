import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagementRoutingModule } from './student-management-routing.module';
import { CreateAdmissionComponent } from './create-admission/create-admission.component';
import { MatCardModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatToolbarModule, MatPaginatorModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { StudentsTableComponent } from './students-table/students-table.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    CreateAdmissionComponent,
    StudentsTableComponent,
    ViewStudentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    StudentManagementRoutingModule
  ]
})
export class StudentManagementModule { }
