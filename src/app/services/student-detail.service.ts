import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Student} from '../models/student'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {
  private selectStudent = new BehaviorSubject<Student>(null);
  public share = this.selectStudent.asObservable();
  constructor() { }
  shareStudent(selectStudent){
    this.selectStudent.next(selectStudent)
  }

}
