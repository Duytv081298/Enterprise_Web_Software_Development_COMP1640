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
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGaurdService } from './components/login/auth-gaurd.service';


const routes: Routes = [
  { path: 'staff/Dashboard', component: DashboardStaffComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/Profile', component: ProfileComponent,canActivate:[AuthGaurdService] },
  { path: 'staff/ChancePassword', component: ChancePasswordComponent ,canActivate:[AuthGaurdService]},

  { path: 'staff/ListTutors', component: ListOfTutorsComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/TutorDetail', component: TutorDetailComponent ,canActivate:[AuthGaurdService]},
  
  { path: 'staff/ListStudents', component: ListOfStudentsComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/StudentDetail', component: StudentDetailComponent ,canActivate:[AuthGaurdService]},

  { path: 'login', component: LoginComponent },
  
  { path: 'Homepage', component: HomepageComponent },

  {path:'', redirectTo:'/Homepage', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
