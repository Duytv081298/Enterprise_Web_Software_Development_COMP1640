import { Component, OnInit } from '@angular/core';

import {Student} from '../../models/student'
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentDetail: Student;
  constructor() { }

  ngOnInit(): void {
    this.studentDetail = JSON.parse(sessionStorage.getItem('student'))
    console.log(this.studentDetail)
  }

}
