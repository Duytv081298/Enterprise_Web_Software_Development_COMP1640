import { Component, OnInit } from '@angular/core';
import { EtutoringService } from 'src/app/etutoring.service';
import { ListClassService } from '../list-class/list-class.service';
import { Tutor } from 'src/app/models/tutor';
import { Class } from 'src/app/models/class';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  student : Student = JSON.parse(sessionStorage.getItem('student'));

  typeUser = JSON.parse(sessionStorage.getItem('user')).type

  a = null;
  name
  avatar
  user: string;
  tutorByStudent : Tutor;
  classByStudent : Class;
  accountStudent = null;

  constructor(private etutoringService: EtutoringService, private listClassService: ListClassService) { }

  ngOnInit(): void {
    this.getId();
  }

  getId() {
    if(this.student != null){
      this.a = this.student.name
      this.etutoringService.getUserbyUserName("student", this.student.username).subscribe(
          data => {
            this.name = data.name
            this.avatar = data.avatar
            this.CheckAccount(data.id);
          }
        )
    }
    else{
      this.a = null;
    }
    this.etutoringService.getUserbyUserName(this.typeUser,
      JSON.parse(sessionStorage.getItem('user')).username).subscribe(
        data => {
          this.name = data.name
          this.avatar = data.avatar
          this.CheckAccount(data.id);
        }
      )
  }

  CheckAccount(userId) {
    this.accountStudent = 'student';
    this.getClassByStudent(userId);
  }

  getClassByStudent(studentId: string): void {
    this.listClassService.getClassByStudent(studentId).subscribe(data => {
      this.classByStudent = data;
      this.user = data.studentId
      this.getTutorByStudent(data.tutorId);
    })
  }

  getTutorByStudent(id){
    this.etutoringService.getTutorById(id).subscribe(data => {
      this.tutorByStudent = data; 
    });
  }

}
