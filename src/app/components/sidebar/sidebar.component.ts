import { Component, OnInit } from '@angular/core';
import { AccountClassificationService } from 'src/app/services/account-classification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  account : String;

  constructor( private typeAccount : AccountClassificationService) { }

  ngOnInit(): void {
    this.CheckAccount();
    console.log(this.account)
  }
  
  accountStaff = null;
  accountTutor = null;
  accountStudent = null;

  CheckAccount(){
    this.typeAccount.share.subscribe(x => this.account = x)
    if(this.account == 'staff'){
      this.accountStaff = 'staff';

    }else if(this.account == 'tutor'){
      this.accountTutor = 'tutor';

    }else if(this.account == 'student') {
      this.accountStudent = 'student';
    }
  }

}
