import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../list-of-students/students.service';
import { Student } from 'src/app/models/student';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TutorService } from '../list-of-tutors/tutor.service';
import { Tutor } from 'src/app/models/tutor';
import { AddClassService } from './add-class.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  students: Student[] = [];
  tutors: Tutor[] = [];
  isSuccess : boolean
  showDialogfalse = null
  showDialogtrue = null
  constructor(private studentsService: StudentsService, 
    private tutorService: TutorService,
    private addClassService: AddClassService) { }
    
  ngOnInit(): void {
    this.getStudent()
    this.getTutor()
  }

  addClass(studentId, tutorId){
    this.addClassService.addClass('1', studentId, tutorId)
    .subscribe(data => this.isSuccess = data)
this.checkSuccess(this.isSuccess)
  }

  checkSuccess(isSuccess){
    if (isSuccess == false) {
      this.showDialogfalse = 'NGU'
      this.showDialogtrue = null
    } else {
      this.showDialogtrue = 'GIOI VAI LON'
      this.showDialogfalse = null
    }
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

  getTutor():void{
    this.tutorService.getTutor().pipe(
      map(receivedTutor => 
        {
          let tutors: Tutor[] = []
          receivedTutor.forEach(a => {
            let tutor:Tutor = {
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
            tutors.push(tutor)
          })
          return tutors
      }) ,
      catchError(error => of([]))
    ).subscribe(data =>{
      this.tutors = data
    } )
  }

}
