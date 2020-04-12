import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component'
import { User } from 'src/app/models/user';
import { Staff } from 'src/app/models/staff';
import { Tutor } from 'src/app/models/tutor';
import { Student } from 'src/app/models/student';
import { EtutoringService } from 'src/app/etutoring.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user : User = this.loginComponent.getUser()
  
  staff:Staff
  tutor: Tutor
  student: Student
  
  typeAccount: string;

  constructor( private loginComponent : LoginComponent,
    private etutoringService : EtutoringService)  { }

  ngOnInit(): void {
    
    
  }
  accountStaff = null;
  accountTutor = null;
  accountStudent = null;
  username: string
  name:string
  phoneNumber: string
  email:string
  dateOfBirth:Date
  avatar:string

  ngDoCheck() {
    this.user = this.loginComponent.getUser()
    this.CheckAccount();
    this.receiveData()
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
    if(this.loginComponent.getUser() != null){
      this.typeAccount = this.loginComponent.getUser().type
    }
  }
  receiveData(){
    if(this.user != null){
      console.log(this.loginComponent.getUser())
      if(this.user.type == 'staff'){
        this.etutoringService.getStaff(this.loginComponent.getUser().username).subscribe(data =>{this.staff = data
          this.setData(this.staff.username, this.staff.name, this.staff.phoneNumber, this.staff.email, this.staff.dateOfBirth,this.staff.avatar)
        } )
      }else if(this.user.type == 'tutor'){
        this.etutoringService.getTutor(this.loginComponent.getUser().username).subscribe(data => {this.tutor = data
          this.setData(this.tutor.username, this.tutor.name, this.tutor.phoneNumber, this.tutor.email, this.tutor.dateOfBirth,this.tutor.avatar)
        })
      }else if(this.user.type == 'student'){
        this.etutoringService.getStudent(this.loginComponent.getUser().username).subscribe(data => { this.student = data
          this.setData(this.student.username, this.student.name, this.student.phoneNumber, this.student.email, this.student.dateOfBirth, this.student.avatar)
        })
      }
    }
  }
  setData(username: string,name:string,phoneNumber: string,email:string,dateOfBirth:Date,avatar:string){
    this.username = username
    this.name = name
    this.phoneNumber = phoneNumber
    this.email = email
    this.dateOfBirth = dateOfBirth
    this.avatar = avatar
    }

}
