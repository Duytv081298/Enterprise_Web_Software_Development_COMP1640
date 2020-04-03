import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Tutor} from '../models/tutor'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorDetailService {
  private selectTutor = new BehaviorSubject<Tutor>(null);
  public share = this.selectTutor.asObservable();
  constructor() { }
  shareTutor(selectTutor){
    this.selectTutor.next(selectTutor)
  }
}
