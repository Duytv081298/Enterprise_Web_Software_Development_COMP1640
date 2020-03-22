import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MajorsComponent } from './components/majors/majors.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DisplayCoursesComponent } from './components/display-courses/display-courses.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { AdminComponent } from './components/admin/admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { DisplayClassComponent } from './components/display-class/display-class.component';
import { InformationComponent } from './components/information/information.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { TimeTableComponent } from './components/time-table/time-table.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OperationHistoryComponent } from './components/operation-history/operation-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavBarComponent,
    MajorsComponent,
    FooterComponent,
    EditProfileComponent,
    CourseDetailsComponent,
    DisplayCoursesComponent,
    SidebarComponent,
    SearchComponent,
    ProfileComponent,
    PostsComponent,
    AdminComponent,
    SidebarAdminComponent,
    DisplayClassComponent,
    InformationComponent,
    CreateClassComponent,
    TimeTableComponent,
    OperationHistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ LoginComponent ]
})
export class AppModule { }
