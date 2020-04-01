import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Sidebar
import { DashboardStaffComponent } from './components/dashboard-staff/dashboard-staff.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChancePasswordComponent } from './components/chance-password/chance-password.component';

import { ListOfTutorsComponent } from './components/list-of-tutors/list-of-tutors.component';
import { TutorDetailComponent } from './components/tutor-detail/tutor-detail.component';


import { ListOfStudentsComponent } from './components/list-of-students/list-of-students.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'staff/Dashboard', component: DashboardStaffComponent },
  { path: 'staff/Profile', component: ProfileComponent },
  { path: 'staff/ChancePassword', component: ChancePasswordComponent },

  { path: 'staff/ListTutors', component: ListOfTutorsComponent },
  { path: 'staff/TutorDetail', component: TutorDetailComponent },
  
  { path: 'staff/ListStudents', component: ListOfStudentsComponent },
  { path: 'staff/StudentDetail', component: StudentDetailComponent },

  { path: 'login', component: LoginComponent },

  {path:'', redirectTo:'/login', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
