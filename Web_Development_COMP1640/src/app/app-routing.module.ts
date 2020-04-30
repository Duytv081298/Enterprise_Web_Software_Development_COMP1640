import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Sidebar
import { DashboardStaffComponent } from './components/dashboard-staff/dashboard-staff.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ListOfTutorsComponent } from './components/list-of-tutors/list-of-tutors.component';
import { TutorDetailComponent } from './components/tutor-detail/tutor-detail.component';


import { ListOfStudentsComponent } from './components/list-of-students/list-of-students.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGaurdService } from './components/login/auth-gaurd.service';
import { AddClassComponent } from './components/add-class/add-class.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { DashboardClassComponent } from './components/dashboard-class/dashboard-class.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { MessagesComponent } from './components/messages/messages.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';


const routes: Routes = [
  { path: 'staff/Dashboard', component: DashboardStaffComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/AddClass', component: AddClassComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/ListTutors', component: ListOfTutorsComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/TutorDetail', component: TutorDetailComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/ListClass', component: DashboardClassComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/ListStudents', component: ListOfStudentsComponent ,canActivate:[AuthGaurdService]},
  { path: 'staff/StudentDetail', component: StudentDetailComponent ,canActivate:[AuthGaurdService]},

  { path: 'tutor/Dashboard', component: TutorDashboardComponent ,canActivate:[AuthGaurdService]},
  { path: 'tutor/ListClass', component: ListClassComponent ,canActivate:[AuthGaurdService]},
  { path: 'tutor/Schedule', component: TimeTableComponent ,canActivate:[AuthGaurdService]},
  { path: 'tutor/Messages', component: MessagesComponent ,canActivate:[AuthGaurdService]},
  { path: 'tutor/AddSchedule', component: AddScheduleComponent ,canActivate:[AuthGaurdService]},

  { path: 'student/Dashboard', component: StudentDashboardComponent ,canActivate:[AuthGaurdService]},
  { path: 'student/Schedule', component: TimeTableComponent ,canActivate:[AuthGaurdService]},
  { path: 'student/Messages', component: MessagesComponent ,canActivate:[AuthGaurdService]},


  { path: 'profile', component: ProfileComponent,canActivate:[AuthGaurdService] },

  
  { path: 'Homepage', component: HomepageComponent },

  {path:'', redirectTo:'/Homepage', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
