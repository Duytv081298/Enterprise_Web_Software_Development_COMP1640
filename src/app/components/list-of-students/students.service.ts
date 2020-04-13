import { Injectable } from '@angular/core';

import {Student} from '../../models/student'

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getStudent, getStudentUndeclared } from 'src/app/models/api';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(getStudent.api)
  }

  getStudentUndeclared(): Observable<Student[]> {
    return this.http.get<Student[]>(getStudentUndeclared.api)
  }

  constructor(
    private http: HttpClient, 
  ) { }
}
