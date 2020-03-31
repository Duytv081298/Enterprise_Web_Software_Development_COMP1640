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
    if(this.typeAccount == 'Staff'){
      this.accountStaff = 'Staff';

    }else if(this.typeAccount == 'Tutor'){
      this.accountTutor = 'Tutor';

    }else if(this.typeAccount == 'Student') {
      this.accountStudent = 'Student';
    }
  }

}
