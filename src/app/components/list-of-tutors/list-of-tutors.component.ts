import { Component, OnInit } from '@angular/core';

import {Tutor} from '../../models/tutor'
import {TutorService} from '../list-of-tutors/tutor.service'
import { catchError, map } from 'rxjs/operators';
import {of} from 'rxjs'
import { TutorDetailService } from 'src/app/services/tutor-detail.service';

@Component({
  selector: 'app-list-of-tutors',
  templateUrl: './list-of-tutors.component.html',
  styleUrls: ['./list-of-tutors.component.css']
})
export class ListOfTutorsComponent implements OnInit {
  tutors: Tutor[] = [];
  constructor(private tutorService: TutorService,
              private shareTutor : TutorDetailService) { }
  ngOnInit(): void {
    this.getTutor();
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
  onSelect(tutor: Tutor){
    this.shareTutor.shareTutor(tutor)
  }

}
