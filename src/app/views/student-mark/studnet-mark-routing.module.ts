import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentMarkComponent } from './student-mark.component';

const routes: Routes = [


{

  path:'studentmark',component:StudentMarkComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudnetMarkRoutingModule { }
