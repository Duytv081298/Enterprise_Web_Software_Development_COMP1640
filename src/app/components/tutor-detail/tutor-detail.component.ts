import { Component, OnInit } from '@angular/core';
import { TutorDetailService } from 'src/app/services/tutor-detail.service';
import {Tutor} from '../../models/tutor'

@Component({
  selector: 'app-tutor-detail',
  templateUrl: './tutor-detail.component.html',
  styleUrls: ['./tutor-detail.component.css']
})
export class TutorDetailComponent implements OnInit {
  selectTutor :Tutor;
  constructor(private shareTutor : TutorDetailService) { }

  ngOnInit(): void {
    this.shareTutor.share.subscribe(x => this.selectTutor = x)
  }

}
