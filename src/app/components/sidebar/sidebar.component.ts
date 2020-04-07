import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  typeAccount: string;

  constructor( private loginComponent : LoginComponent ) { }
  ngOnInit(): void {
  }
  accountStaff = null;
  accountTutor = null;
  accountStudent = null;
  ngDoCheck() {
    this.CheckAccount();
  }
  CheckAccount(){
    this.setTypeUser();
    if(this.typeAccount == 'staff'){
      this.accountStaff = 'staff';

    }else if(this.typeAccount == 'tutor'){
      this.accountTutor = 'tutor';

    }else if(this.typeAccount == 'student') {
      this.accountStudent = 'student';
    }
  }
  setTypeUser(){
    this.typeAccount = this.loginComponent.getTypeUser()
  }

}
