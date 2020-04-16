import { Component, OnInit } from '@angular/core';

import {Tutor} from '../../models/tutor'

@Component({
  selector: 'app-tutor-detail',
  templateUrl: './tutor-detail.component.html',
  styleUrls: ['./tutor-detail.component.css']
})
export class TutorDetailComponent implements OnInit {
  // selectTutor :Tutor;
  tutorDetail: Tutor;
  constructor() { }

  ngOnInit(): void {
    // this.shareTutor.share.subscribe(x => this.selectTutor = x)

    this.tutorDetail = JSON.parse(sessionStorage.getItem('tutor'))
    console.log(this.tutorDetail)
  }

}
