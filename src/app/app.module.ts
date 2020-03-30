import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardStaffComponent } from './components/dashboard-staff/dashboard-staff.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ChancePasswordComponent } from './components/chance-password/chance-password.component';
import { ListOfTutorsComponent } from './components/list-of-tutors/list-of-tutors.component';
import { AddTutorComponent } from './components/add-tutor/add-tutor.component';
import { UpdateTutorComponent } from './components/update-tutor/update-tutor.component';
import { TutorDetailComponent } from './components/tutor-detail/tutor-detail.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { ListOfTutorStudentsComponent } from './components/list-of-tutor-students/list-of-tutor-students.component';
import { ListOfStudentsComponent } from './components/list-of-students/list-of-students.component';
import { ListOfStudentTutorsComponent } from './components/list-of-student-tutors/list-of-student-tutors.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { ListOfMajorsComponent } from './components/list-of-majors/list-of-majors.component';
import { AddMajorComponent } from './components/add-major/add-major.component';
import { UpdateMajorComponent } from './components/update-major/update-major.component';
import { MajorDetailComponent } from './components/major-detail/major-detail.component';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardStaffComponent,
    ProfileComponent,
    UpdateProfileComponent,
    ChancePasswordComponent,
    ListOfTutorsComponent,
    AddTutorComponent,
    UpdateTutorComponent,
    TutorDetailComponent,
    TimeTableComponent,
    ListOfTutorStudentsComponent,
    ListOfStudentsComponent,
    ListOfStudentTutorsComponent,
    AttendanceComponent,
    UpdateStudentComponent,
    AddStudentComponent,
    StudentDetailComponent,
    ListOfMajorsComponent,
    AddMajorComponent,
    UpdateMajorComponent,
    MajorDetailComponent,
    ListOfCoursesComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    CourseDetailComponent,
    StudentDashboardComponent,
    TutorDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
