import { Component, OnInit, Input } from '@angular/core';
import { TutorService } from '../list-of-tutors/tutor.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ListClassService } from '../list-class/list-class.service';
import { StudentByTutor } from 'src/app/models/studentByTutor';

@Component({
  selector: 'app-dashboard-class',
  templateUrl: './dashboard-class.component.html',
  styleUrls: ['./dashboard-class.component.css']
})
export class DashboardClassComponent implements OnInit {

  tutorStudent: StudentByTutor[] = []

  constructor(private tutorService: TutorService,
    private listClassService: ListClassService) { 

      this.getStudentByTutor();

    }


  ngOnInit(): void {
    
  }

  getStudentByTutor() {
    this.tutorService.getTutor().pipe(
      map(receivedTutor => {
        let students: StudentByTutor[] = []
        receivedTutor.forEach(a => {
          let student: StudentByTutor = {
            tutorId: a[0],
            tutorName: a[1],
          }
          let tutorId = student.tutorId
          let tutorName = student.tutorName

          this.listClassService.getClass(tutorId).pipe(
            map(receivedStudents => {     
              let studentNames : string[] = []
              receivedStudents.forEach(a => {
                let studentName = a[1]
                studentNames.push(studentName)
              })
              let student: StudentByTutor = {
                tutorId: tutorId,
                tutorName: tutorName,
                studentName: studentNames,
              }
              students.push(student)
              return students
            }),
            catchError(error => of([]))
          ).subscribe(data => {
            this.tutorStudent = data
          })
        })
        return students
      }),
      catchError(error => of([]))
    ).subscribe(data => {
      this.tutorStudent = data
      console.log(this.tutorStudent)
    })
  }

}