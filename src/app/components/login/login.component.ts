import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {LoginService} from '../login/login.service'
import { User } from 'src/app/models/user';
import { Tutor } from 'src/app/models/tutor';
import { Student } from 'src/app/models/student';
import { Staff } from 'src/app/models/staff';
import { AccountClassificationService } from 'src/app/services/account-classification.service';
import { ShareStaffService } from 'src/app/services/share-staff.service';
import { TutorDetailService } from 'src/app/services/tutor-detail.service';
import { StudentDetailService } from 'src/app/services/student-detail.service';

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
    private typeAccount : AccountClassificationService,
    private staff : ShareStaffService,
    private tutor: TutorDetailService,
    private student: StudentDetailService) { }
  ngOnInit(): void {}

  loginUser(event){
    event.preventDefault()
    const target = event.target
    this.username = target.querySelector('#username').value
    this.pasword = target.querySelector('#password').value
    this.loginService.getUser(this.username, this.pasword)
    .subscribe(data => this.user = data)
    
    this.typeAccount.shareTypeAccount(this.user.type)
  }
  shareInfor(){
    if(this.user.type == 'staff'){
      this.staff.shareStaff(this.user)
    }else if(this.user.type == 'tutor'){
      this.tutor.shareTutor(this.user)
    }else if(this.user.type == 'student'){
      this.student.shareStudent(this.user)
    }
  }
}
