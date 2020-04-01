import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardStaffComponent } from './components/dashboard-staff/dashboard-staff.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChancePasswordComponent } from './components/chance-password/chance-password.component';
import { ListOfTutorsComponent } from './components/list-of-tutors/list-of-tutors.component';
import { TutorDetailComponent } from './components/tutor-detail/tutor-detail.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { ListOfStudentsComponent } from './components/list-of-students/list-of-students.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';


import {StudentsService} from './components/list-of-students/students.service'
import {EtutoringService} from './etutoring.service'


import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardStaffComponent,
    ProfileComponent,
    ChancePasswordComponent,
    ListOfTutorsComponent,
    TutorDetailComponent,
    TimeTableComponent,
    ListOfStudentsComponent,
    StudentDetailComponent,
    StudentDashboardComponent,
    TutorDashboardComponent,
    LoginComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [StudentsService,
    EtutoringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
