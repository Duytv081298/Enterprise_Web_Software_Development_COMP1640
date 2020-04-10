import { Component, OnInit, Input } from '@angular/core';
import { TutorService } from '../list-of-tutors/tutor.service';
import { map, catchError } from 'rxjs/operators';
import { Tutor } from 'src/app/models/tutor';
import { of } from 'rxjs';
import { ListClassService } from '../list-class/list-class.service';
import { Class } from 'src/app/models/class';

@Component({
  selector: 'app-dashboard-class',
  templateUrl: './dashboard-class.component.html',
  styleUrls: ['./dashboard-class.component.css']
})
export class DashboardClassComponent implements OnInit {
  tutors : Tutor[] = []
  classes : Class[] = []
  
  tutorId : string

  constructor(private tutorService : TutorService,
              private listClassService : ListClassService) { }

  ngOnInit(): void {
    this.getTutor();
    this.getClass(this.tutorId)
    console.log(this.tutorId)
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

  getClass(tutorId: string):void{
    // let element: HTMLElement = document.getElementsByClassName('btn')[0] as HTMLElement;
    // let tutorId = element.nodeValue
    // console.log(tutorId)
    this.listClassService.getClass(tutorId).pipe(

      map(receivedStudents => {
          let students: Class[] = []
          receivedStudents.forEach(a => {
            let student:Class = {
              classId: a[0],
              studentName: a[1],
             tutorName: a[2]
            }
            students.push(student)
          })
          return students
      }) ,
      catchError(error => of([]))
    ).subscribe(data =>{
      this.classes = data
      console.log(this.classes)
    } )
  }
}
