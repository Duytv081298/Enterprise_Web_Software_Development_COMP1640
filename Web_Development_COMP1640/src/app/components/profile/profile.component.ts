import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
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
  user : User = JSON.parse(sessionStorage.getItem('user'))

  staff:Staff
  tutor: Tutor
  student: Student

  username: string
  name:string
  phoneNumber: string
  email:string
  dateOfBirth:Date
  avatar: string
  address: string

  constructor(
    private etutoringService : EtutoringService) { }

  ngOnInit(): void {
    this.receiveData()
  }
  receiveData() {
    if (this.user != null) {
      this.etutoringService.getUserbyUserName(this.user.type, this.user.username).subscribe(data => {
        this.setData(data.username, data.name, data.phoneNumber, data.email, data.dateOfBirth, data.avatar, data.address)
      })
    }
  }
  setData(username:string, name:string, phoneNumber:string, email:string, dateOfBirth:Date, avatar:string, address:string){
    this.username = username
    this.name = name
    this.phoneNumber = phoneNumber
    this.email = email
    this.dateOfBirth = dateOfBirth
    this.avatar = avatar
    this.address = address
  }
  
}
