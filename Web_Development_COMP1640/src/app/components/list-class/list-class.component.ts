import { Component, OnInit } from '@angular/core';
import { ListClassService } from './list-class.service';
import { Class } from 'src/app/models/class';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { EtutoringService } from 'src/app/etutoring.service';
import { Tutor } from 'src/app/models/tutor';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {
  class : Class[]=[]
  tutor : Tutor 
  user = JSON.parse(sessionStorage.getItem('user'))
  constructor(private listClassService:ListClassService,
              private etutoringService:EtutoringService) { }

  ngOnInit(): void {
   this.getId()
  }

  getClass(tutorId : string):void{
    this.listClassService.getClass(tutorId).pipe(
      map(receivedStudents => {
          let students: Class[] = []
          receivedStudents.forEach(a => {
            let student:Class = {
              classId: a[0],
              studentId: a[1],
              studentName: a[2],
              tutorId: a[3],
             tutorName: a[4]
            }
            students.push(student)
          })
          return students
      }) ,
      catchError(error => of([]))
    ).subscribe(data =>{
      console.log(data)
      this.class = data
    } )
  }

  getId() {
    this.etutoringService.getTutor(this.user.username)
                         .subscribe(data => {this.tutor = data
                                             this.getClass(this.tutor.id)})                                       
  }
}
