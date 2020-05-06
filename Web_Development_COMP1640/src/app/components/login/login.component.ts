import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login/login.service'
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

import { EtutoringService } from 'src/app/etutoring.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User
  loginUser = null
  id: String

  constructor(private router: Router, private loginService: LoginService, private etutoringService : EtutoringService ) { }

  ngOnInit(): void { }

  getTypeUser(username, password) {
    this.loginService.getTypeUser(username, password)
      .subscribe(
        data => {
          this.user = data
          if (data == null || username == null || password == null) {
            this.loginUser = "mail"
            console.log(this.loginUser)
          } else {
            let element: HTMLElement = document.getElementsByClassName('closeLogin')[0] as HTMLElement;
            element.click();
            if (this.user.type == 'staff') {
              this.etutoringService.getStaff(data.username).subscribe(staffLogin => {sessionStorage.setItem('staffLogin', JSON.stringify(staffLogin))})
              this.setUser(this.user)
              this.router.navigate(['/staff/Dashboard'])
            } else if (this.user.type == 'tutor') {
              this.etutoringService.getTutor(data.username).subscribe(tutorLogin => {sessionStorage.setItem('tutorLogin', JSON.stringify(tutorLogin))})
              this.setUser(this.user)
              this.router.navigate(['/tutor/Dashboard'])
            } else if (this.user.type == 'student') {
              this.etutoringService.getStudent(data.username).subscribe(studentLogin => {sessionStorage.setItem('studentLogin', JSON.stringify(studentLogin))})
              this.setUser(this.user)
              this.router.navigate(['/student/Dashboard'])
            } else if (this.user.type == 'authorized') {
              this.setUser(this.user)
              this.router.navigate(['/superStaff/Dashboard'])
            }
          }
        })
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('user')
    return !(user === null)
  }
  getUser(): User {
    let user: User = null
    user = JSON.parse(sessionStorage.getItem('user'))
    return user
  }
  setUser(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  logOut() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/Homepage'])
  }

}
