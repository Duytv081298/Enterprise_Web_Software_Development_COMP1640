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

  user: User[] = [];
  
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target
    this.username = target.querySelector('#username').value
    this.pasword = target.querySelector('#password').value
    this.checklogin()
    
    let userArr = JSON.parse(JSON.stringify(this.user));
    this.username = userArr.username
    this.usernameto.emit(this.username)
    console.log(this.username)
  }
  checklogin(): void{
    this.loginService.getUser(this.username, this.pasword)
    .subscribe(data => this.user = data)
  }

}
