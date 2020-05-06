import { Component, OnInit, DoCheck } from '@angular/core';
import { Staff } from './models/staff';
import { Tutor } from './models/tutor';
import { Student } from './models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Web-Development-COMP1640';
  user = JSON.parse(sessionStorage.getItem('user'))

  login = null;
  logout = null;

  staff : Staff
  tutor : Tutor
  student : Student
  name
  
  accountStaff = null;
  accountStudent = null;
  accountTutor = null;
  accountSuperStaff = null;
 
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  ngDoCheck() {
    this.user = JSON.parse(sessionStorage.getItem('user'))
    this.showLogin()
  }

  showLogin() {
    if (this.user != null) {
      this.login = null;
      this.logout = 'logout';
      if(this.user.type == 'staff'){
        this.name = JSON.parse(sessionStorage.getItem('staffLogin')).name;
        this.accountStaff = "show";
        this.accountSuperStaff = null;
        this.accountStudent = null;
        this.accountTutor = null;
      } else if(this.user.type == 'student'){
        this.name = JSON.parse(sessionStorage.getItem('studentLogin')).name;
        this.accountStudent = "show";
        this.accountSuperStaff = null;
        this.accountStaff = null;
        this.accountTutor = null;
      } else if(this.user.type == 'tutor'){
        this.name = JSON.parse(sessionStorage.getItem('tutorLogin')).name;
        this.accountTutor = "show";
        this.accountSuperStaff = null;
        this.accountStaff = null;
        this.accountStudent = null;
      } else if(this.user.type == 'authorized'){
        this.name = JSON.parse(sessionStorage.getItem('user')).username;
        this.accountSuperStaff = "show";
        this.accountStaff = null;
        this.accountStudent = null;
        this.accountTutor = null;
      }
    } else {
      this.login = 'login';
      this.logout = null;
      this.accountSuperStaff = null;
      this.accountStaff = null;
      this.accountTutor = null;
      this.accountStudent = null;
    }
  }

  logOut() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/Homepage'])
  }

}
