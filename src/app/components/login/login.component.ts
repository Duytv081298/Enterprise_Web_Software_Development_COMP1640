import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {LoginService} from '../login/login.service'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() usernameto = new EventEmitter<String>();

  username: String;
  pasword: String;

  user: User;
  routerLinks: String;
  
  
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target
    this.username = target.querySelector('#username').value
    this.pasword = target.querySelector('#password').value
    // this.checklogin()
    
    this.loginService.getUser(this.username, this.pasword)
    .subscribe(data => this.user = data)
    this.CheckAccount();
    console.log(this.user.username)
    console.log(this.routerLinks)
  }
  // checklogin(): void{
  //   this.loginService.getUser(this.username, this.pasword)
  //   .subscribe(data => this.user = data)
  //   this.CheckAccount();
  // }

  CheckAccount(){
    if(this.user.username == 'staff'){
      this.routerLinks = "/staff/Dashboard";

    }else if(this.user.username == 'tutor'){
      this.routerLinks = "/tutor/Dashboard";

    }else if(this.user.username == 'student') {
      this.routerLinks = "/student/Dashboard";
    }
  }

}
