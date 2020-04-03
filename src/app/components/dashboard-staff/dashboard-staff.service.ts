import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardStaffService {

  constructor( private http: HttpClient) {

  }

  private getNumberOfStudentApi = 'http://localhost:8080/student/number-student'
  getNumberOfStudent() : Observable<Number>{
    return this.http.get<Number>(this.getNumberOfStudentApi);
  }

  private getNumberOfTutorApi = 'http://localhost:8080/tutor/number-tutor'
  getNumberOfTutor() : Observable<Number>{
    return this.http.get<Number>(this.getNumberOfTutorApi);
  }



}
