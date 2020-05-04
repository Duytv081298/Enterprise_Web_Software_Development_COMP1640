import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginComponent } from '../app/components/login/login.component'
import { User } from '../app/models/user';
import { EtutoringService } from './etutoring.service';
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

  // superstaff : Staff
  // staff : Staff
  // tutor : Tutor
  // student : Student

  login = null;
  logout = null;
 
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
    console.log(this.user)
  }

  showLogin() {
    if (this.user != null) {
      this.login = null;
      this.logout = 'logout';
      if(this.user.type == 'staff'){
        this.accountStaff = "show";
        this.accountSuperStaff = null;
        this.accountStudent = null;
        this.accountTutor = null;
        console.log(this.user.username)
      } else if(this.user.type == 'student'){
        this.accountStudent = "show";
        this.accountSuperStaff = null;
        this.accountStaff = null;
        this.accountTutor = null;
      } else if(this.user.type == 'tutor'){
        this.accountTutor = "show";
        this.accountSuperStaff = null;
        this.accountStaff = null;
        this.accountStudent = null;
      } else if(this.user.type == 'authorized'){
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
      console.log(this.user)
    }
  }

  logOut() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/Homepage'])
  }

}
