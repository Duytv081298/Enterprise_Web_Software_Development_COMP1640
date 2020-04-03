import { Component, OnInit } from '@angular/core';
import { AccountClassificationService } from './services/account-classification.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Web-Development-COMP1640';
  checkAccount  = null;
  login = null;
  logout = null;
  receiveMessage($event) {
    this.typeAccount = $event;
  }
  constructor( private typeAccount : AccountClassificationService) { 
  }
  ngOnInit(): void {
    this.receiveData()
    
  }
  receiveData(){
    this.typeAccount.share.subscribe(x => this.checkAccount = x)
    console.log("typeAccount in AppComponent: " + this.checkAccount)
    if(this.checkAccount == null){
      this.login = 'login';
      this.logout = null;
    }else{
      this.login = null;
      this.logout = 'logout';
    }
  }
  



}
