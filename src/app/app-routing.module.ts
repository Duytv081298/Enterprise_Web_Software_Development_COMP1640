import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//admin
import { AdminComponent } from './components/admin/admin.component';
import { DisplayCoursesComponent } from './components/display-courses/display-courses.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { InformationComponent } from './components/information/information.component';
import { DisplayClassComponent } from './components/display-class/display-class.component';

//Tutor
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';

//Student

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/courses', component: DisplayCoursesComponent },
  { path: 'admin/tutors', component: DisplayCoursesComponent },
  { path: 'admin/students', component: DisplayCoursesComponent },
  { path: 'admin/add-class', component: CreateClassComponent },
  { path: 'admin/list-class', component: DisplayClassComponent },
  { path: 'admin/tutor/information', component: InformationComponent },
  { path: 'admin/student/information', component: InformationComponent },

  
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
