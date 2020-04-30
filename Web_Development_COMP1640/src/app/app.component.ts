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


  staff: Staff
  tutor: Tutor
  student: Student

  login = null;
  logout = null;

  accountStaff = null;
  accountStudent = null;
  accountTutor = null;

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
        this.accountStaff = "show";
      } else if(this.user.type == 'student'){
        this.accountStudent = "show";
      } else if(this.user.type == 'tutor'){
        this.accountTutor = "show";
      } else{
        this.accountStaff = null;
        this.accountStudent = null;
        this.accountTutor = null;
      }
    } else {
      this.login = 'login';
      this.logout = null;
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
