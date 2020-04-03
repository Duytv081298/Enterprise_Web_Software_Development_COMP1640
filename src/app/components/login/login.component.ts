import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {LoginService} from '../login/login.service'
import { User } from 'src/app/models/user';
import { AccountClassificationService } from 'src/app/services/account-classification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  pasword: String;

  user: User;
  
  
  constructor(private loginService: LoginService,
    private typeAccount : AccountClassificationService) { }
  ngOnInit(): void {

  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    this.username = target.querySelector('#username').value
    this.pasword = target.querySelector('#password').value
    this.loginService.getUser(this.username, this.pasword)
    .subscribe(data => this.user = data)
    
    this.typeAccount.shareTypeAccount(this.user.type)
    console.log(this.user.type)
  }
  // shareData(data){
  //   if(data != null){
  //     this.typeAccount.shareTypeAccount(data)
  //   }
  // }
}
