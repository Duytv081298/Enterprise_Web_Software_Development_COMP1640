import { Injectable } from '@angular/core';

import {Student} from '../../models/student'

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private getStudentAPI = 'http://localhost:8080/students';
  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.getStudentAPI)
  }
  constructor(
    private http: HttpClient, 
  ) { }
}
