import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ProfileService } from './profile.service';
import { Staff } from 'src/app/models/staff';
import { User } from 'src/app/models/user';
import { EtutoringService } from 'src/app/etutoring.service';
import { Tutor } from 'src/app/models/tutor';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : User = this.loginComponent.getUser()

  staff:Staff
  tutor: Tutor
  student: Student

  username: string
  name:string
  phoneNumber: string
  email:string
  dateOfBirth:Date

  constructor(
    private loginComponent :LoginComponent,
    private etutoringService : EtutoringService) { }

  ngOnInit(): void {
    this.receiveData()
  }
  
  receiveData(){
    if(this.user != null){
      console.log(this.loginComponent.getUser())
      if(this.user.type == 'staff'){
        this.etutoringService.getStaff(this.loginComponent.getUser().username).subscribe(data =>{this.staff = data
          this.setData(this.staff.username, this.staff.name, this.staff.phoneNumber, this.staff.email, this.staff.dateOfBirth)
        } )
      }else if(this.user.type == 'tutor'){
        this.etutoringService.getTutor(this.loginComponent.getUser().username).subscribe(data => {this.tutor = data
          this.setData(this.tutor.username, this.tutor.name, this.tutor.phoneNumber, this.tutor.email, this.tutor.dateOfBirth)
        })
      }else if(this.user.type == 'student'){
        this.etutoringService.getStudent(this.loginComponent.getUser().username).subscribe(data => { this.student = data
          this.setData(this.student.username, this.student.name, this.student.phoneNumber, this.student.email, this.student.dateOfBirth)
        })
      }
    }
  }
  setData(username: string,name:string,phoneNumber: string,email:string,dateOfBirth:Date){
    this.username = username
    this.name = name
    this.phoneNumber = phoneNumber
    this.email = email
    this.dateOfBirth = dateOfBirth
    }

}
