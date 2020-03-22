import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//admin
import { AdminComponent } from './components/admin/admin.component';
import { DisplayCoursesComponent } from './components/display-courses/display-courses.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { InformationComponent } from './components/information/information.component';
import { InformationStudentComponent } from './components/information-student/information-student.component';
import { DisplayClassComponent } from './components/display-class/display-class.component';
import { EditClassComponent } from './components/edit-class/edit-class.component';
import { DisplayTutorComponent } from './components/display-tutor/display-tutor.component';
import { DisplayStudentComponent } from './components/display-student/display-student.component';
import { ClassDetailForAdminComponent } from './components/class-detail-for-admin/class-detail-for-admin.component';


//Tutor
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';

//Student

const routes: Routes = [
  { path: 'admin/courses', component: DisplayCoursesComponent },
  { path: 'admin/tutors', component: DisplayTutorComponent },
  { path: 'admin/students', component: DisplayStudentComponent },
  { path: 'admin/add-class', component: CreateClassComponent },
  { path: 'admin/list-class', component: DisplayClassComponent },
  { path: 'admin/edit-class', component: EditClassComponent },
  { path: 'admin/tutor/information', component: InformationComponent },
  { path: 'admin/student/information', component: InformationStudentComponent },
  { path: 'admin/class-detail', component: ClassDetailForAdminComponent },


  
  { path: 'tutor', component: ProfileComponent },
  { path: 'student', component: ProfileComponent },


  { path: 'tutor/PostsComponent', component: PostsComponent },
  { path: 'student/PostsComponent', component: PostsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
