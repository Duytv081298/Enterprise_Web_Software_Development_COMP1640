import { Injectable } from '@angular/core';

import {Tutor} from '../../models/tutor'

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private getTutorAPI = 'http://localhost:8080/tutor/tutors';
  getTutor(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.getTutorAPI)
  }
  constructor(
    private http: HttpClient, 
  ) { }
}
