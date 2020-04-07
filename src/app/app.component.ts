import { Component, OnInit , DoCheck} from '@angular/core';
import { AccountClassificationService } from './services/account-classification.service';
import {LoginComponent} from '../app/components/login/login.component'
import {User} from '../app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web-Development-COMP1640';
  typeUser : string
  user: User
  
  login = null;
  logout = null;
  receiveMessage($event) {
    this.typeAccount = $event;
  }
  constructor( private typeAccount : AccountClassificationService,
              private loginComponent :LoginComponent
                ) { 
  }
  ngOnInit(): void {
    // this.receiveData()
  }
  setTypeUser(){
    this.typeUser = this.loginComponent.getTypeUser()
  }
  ngDoCheck() {
    // if(this.typeUser != this.loginComponent.getTypeUser()){
    //   console.log(this.typeUser)
    //   console.log(this.loginComponent.getTypeUser())
    //   this.typeUser = this.loginComponent.getTypeUser()
    // }
    this.receiveData()
  }
  receiveData(){
    this.setTypeUser()
    // this.ngDoCheck()
    
    this.typeAccount.share.subscribe(x => this.user = x)
    console.log(this.user);
    console.log("typeAccount in AppComponent: " + this.typeUser)
    if(this.typeUser == null){
      this.login = 'login';
      this.logout = null;
    }else{
      this.login = null;
      this.logout = 'logout';
    }
  }
  
  logOut(){
    this.user = null;
    this.loginComponent.logOut();
    console.log("goodbye");
    }



}
