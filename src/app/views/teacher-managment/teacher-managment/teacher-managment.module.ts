import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherManagmentRoutingModule } from './teacher-managment-routing.module';
import { TeacherCreationComponent } from './teacher-creation/teacher-creation.component';
import { TeacherManagmentService } from './teacher-managment.service';
import { MatCardModule, MatButtonModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatCheckboxModule, MatFormFieldModule, MatStepperModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TeacherCreationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
 
    TeacherManagmentRoutingModule
  ],
  providers:[TeacherManagmentService]
})
export class TeacherManagmentModule { }
