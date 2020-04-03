import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from 'src/app/services/student-detail.service';
import {Student} from '../../models/student'
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  selectStudent :Student;

  constructor(private shareStudent : StudentDetailService) { }

  ngOnInit(): void {
    this.shareStudent.share.subscribe(x => this.selectStudent = x)
    console.log(this.selectStudent)
  }

}
