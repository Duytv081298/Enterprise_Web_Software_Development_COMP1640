import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {LoginService} from '../login/login.service'
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User
  result : String
  id:String

  constructor(
    private router: Router,
    private loginService: LoginService, ) { }
  ngOnInit(): void {}

  getTypeUser(username, password){
      this.loginService.getTypeUser(username, password)
      .subscribe(
        data => {
          this.user = data
          console.log(this.user)
          if( this.user == null){
            this.result = 'e-mail'
          }else{
            let element: HTMLElement = document.getElementsByClassName('closeLogin')[0] as HTMLElement;
            element.click();
            if(this.user.type == 'staff'){
              this.setUser(this.user)
              this.router.navigate(['/staff/Dashboard'])
            }else if(this.user.type == 'tutor'){
              this.setUser(this.user)
              this.router.navigate(['/tutor/Dashboard'])
            }else if(this.user.type == 'student'){
              this.setUser(this.user)
              this.router.navigate(['/student/Dashboard'])
            }
          }
        })
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('user')
    return !(user === null)
  }
  getUser(): User{
    let user : User = null 
    user = JSON.parse(sessionStorage.getItem('user'))
    return user
  }
  setUser(user: User){
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  logOut() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/Homepage'])
  }

}
