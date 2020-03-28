import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'sessions/signin4',
    pathMatch: 'full' 
  },
   {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
      },
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'others/:role/:id',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule), 
      },
      {
        path: 'teacher-managment', 
        loadChildren: () => import('./views/teacher-managment/teacher-managment/teacher-managment.module')
        .then(m => m.TeacherManagmentModule), 
      },
      {
        path: 'library-managment', 
        loadChildren: () => import('./views/library-managment/library-managment.module')
        .then(m => m.LibraryManagmentModule), 
      },
      {
        path: 'student-managment', 
        loadChildren: () => import('./views/student-management/student-management.module')
        .then(m => m.StudentManagementModule), 
      },
      {
        path: 'adminis', 
        loadChildren: () => import('./views/administration/administration.module')
        .then(m => m.AdministrationModule), 
      },
      {
        path: 'dashboard', 
        loadChildren: () => import('./views/dashboard/dashboard.module')
        .then(m =>m.DashboardModule), 
      },
      {
        path: 'compliant', 
        loadChildren: () => import('./views/compliant/compliant-module.module')
        .then(m =>m.CompliantModuleModule), 
      },
      
      

      {
        path: 'subject', 
        loadChildren: () => import('./views/subject/subject.module')
        .then(m =>m.SubjectModule), 
      },
      
      {
        path: 'exam', 
        loadChildren: () => import('./views/exam.module')
        .then(m =>m.ExamModule), 
      },
      
      {
        path: 'studentmark', 
        loadChildren: () => import('./views/student-mark/studnet-mark.module')
        .then(m =>m.StudnetMarkModule), 
      },
         
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

