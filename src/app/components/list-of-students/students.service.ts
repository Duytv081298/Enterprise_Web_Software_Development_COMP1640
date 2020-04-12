import { Injectable } from '@angular/core';

import {Student} from '../../models/student'

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getStudent } from 'src/app/models/api';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  // private getStudentAPI = 'http://localhost:8080/students/undeclared';
  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(getStudent.api)
  }
  constructor(
    private http: HttpClient, 
  ) { }
}
