import { Component, OnInit } from '@angular/core';

import {Student} from '../../models/student'
import {StudentsService} from '../list-of-students/students.service'
import { catchError, map } from 'rxjs/operators';
import {of} from 'rxjs'
import { StudentDetailService } from 'src/app/services/student-detail.service';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentsService: StudentsService,
    private shareStudent : StudentDetailService) { }
  ngOnInit(): void {
    this.getStudent();
    
  }

  getStudent():void{
    this.studentsService.getStudent().pipe(
      map(receivedStudents => 
        {
          let students: Student[] = []
          receivedStudents.forEach(a => {
            let student:Student = {
              id :a[0],
              name:a[1],
              phoneNumber: a[2],
              email: a[3],
              address: a[4],
              dateOfBirth: a[5],
              avatar:a[6],
              username: a[7],
              lastLogin: a[8]
            }
            students.push(student)
          })
          return students
      }) ,
      catchError(error => of([]))
    ).subscribe(data =>{
      this.students = data
    } )
  }
  onSelect(student: Student){
    this.shareStudent.shareStudent(student)
  }

}
