import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.CheckAccount();
  }
  @Input() typeAccount: String;
  
  accountStaff = null;
  accountTutor = null;
  accountStudent = null;

  CheckAccount(){
    if(this.typeAccount == 'staff'){
      this.accountStaff = 'staff';

    }else if(this.typeAccount == 'tutor'){
      this.accountTutor = 'tutor';

    }else if(this.typeAccount == 'student') {
      this.accountStudent = 'student';
    }
  }

}
