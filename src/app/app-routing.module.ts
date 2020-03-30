import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Sidebar
import { DashboardStaffComponent } from './components/dashboard-staff/dashboard-staff.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ChancePasswordComponent } from './components/chance-password/chance-password.component';

import { ListOfTutorsComponent } from './components/list-of-tutors/list-of-tutors.component';
import { AddTutorComponent } from './components/add-tutor/add-tutor.component';
import { UpdateTutorComponent } from './components/update-tutor/update-tutor.component';
import { TutorDetailComponent } from './components/tutor-detail/tutor-detail.component';
import { ListOfTutorStudentsComponent } from './components/list-of-tutor-students/list-of-tutor-students.component';


import { ListOfStudentsComponent } from './components/list-of-students/list-of-students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { ListOfStudentTutorsComponent } from './components/list-of-student-tutors/list-of-student-tutors.component';



import { AttendanceComponent } from './components/attendance/attendance.component';

import { ListOfMajorsComponent } from './components/list-of-majors/list-of-majors.component';
import { AddMajorComponent } from './components/add-major/add-major.component';
import { UpdateMajorComponent } from './components/update-major/update-major.component';
import { MajorDetailComponent } from './components/major-detail/major-detail.component';

import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';


const routes: Routes = [
  { path: 'staff/Dashboard', component: DashboardStaffComponent },
  { path: 'staff/Profile', component: ProfileComponent },
  { path: 'staff/UpdateProfile', component: UpdateProfileComponent },
  { path: 'staff/ChancePassword', component: ChancePasswordComponent },

  { path: 'staff/ListTutors', component: ListOfTutorsComponent },
  { path: 'staff/AddTutor', component: AddTutorComponent },
  { path: 'staff/UpdateTutor', component: UpdateTutorComponent },
  { path: 'staff/TutorDetail', component: TutorDetailComponent },
  { path: 'staff/List-Students-Of-Tutor', component: ListOfTutorStudentsComponent },
  
  { path: 'staff/ListStudents', component: ListOfStudentsComponent },
  { path: 'staff/AddStudent', component: AddStudentComponent },
  { path: 'staff/UpdateStudent', component: UpdateStudentComponent },
  { path: 'staff/StudentDetail', component: StudentDetailComponent },
  { path: 'staff/List-Tutors-Of-Student', component: ListOfStudentTutorsComponent },

  { path: 'staff/ListOfMajors', component: ListOfMajorsComponent },
  { path: 'staff/AddMajor', component: AddMajorComponent },
  { path: 'staff/UpdateMajor', component: UpdateMajorComponent },
  { path: 'staff/MajorDetail', component: MajorDetailComponent },

  
  { path: 'staff/ListOfCourses', component: ListOfCoursesComponent },
  { path: 'staff/AddCourse', component: AddCourseComponent },
  { path: 'staff/UpdateCourse', component: UpdateCourseComponent },
  { path: 'staff/CourseDetail', component: CourseDetailComponent },

  {path:'', redirectTo:'/staff/Dashboard', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
