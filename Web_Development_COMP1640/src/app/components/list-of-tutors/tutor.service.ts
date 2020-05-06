import { Injectable } from '@angular/core';

import {Tutor} from '../../models/tutor'

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getTutor } from 'src/app/models/api';


@Injectable({
  providedIn: 'root'
})
export class TutorService {

  getTutor(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(getTutor.api)
  }
  
  constructor(
    private http: HttpClient, 
  ) { }
}
