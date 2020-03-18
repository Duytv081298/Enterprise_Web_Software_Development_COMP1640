import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewsComponent } from './components/news/news.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';
import { MajorsComponent } from './components/majors/majors.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DisplayCoursesComponent } from './components/display-courses/display-courses.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavBarComponent,
    NewsComponent,
    ContentHomeComponent,
    MajorsComponent,
    ClubsComponent,
    FooterComponent,
    EditProfileComponent,
    CourseDetailsComponent,
    DisplayCoursesComponent,
    SidebarComponent,
    SearchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ LoginComponent ]
})
export class AppModule { }
