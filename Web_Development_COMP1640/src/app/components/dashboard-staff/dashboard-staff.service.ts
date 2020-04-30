import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { getNumberOfStudent, getNumberOfTutor, getNumberOfStudentNoTutor, getStudentNonInteraction, getNumberOfMess, getAverageTutorMess, getAverageStudentMess } from 'src/app/models/api';

@Injectable({
  providedIn: 'root'
})
export class DashboardStaffService {

  constructor( private http: HttpClient) {
  }

  getNumberOfStudent() : Observable<number>{
    return this.http.get<number>(getNumberOfStudent.api);
  }

  
  getNumberOfTutor() : Observable<number>{
    return this.http.get<number>(getNumberOfTutor.api);
  }

  getNumberOfStudentNoTutor() : Observable<number>{
    return this.http.get<number>(getNumberOfStudentNoTutor.api);
  }

  getNumberOfMess() : Observable<number>{
    return this.http.get<number>(getNumberOfMess.api);
  }

  getAverageTutorMess() : Observable<number>{
    return this.http.get<number>(getAverageTutorMess.api);
  }

  getAverageStudentMess() : Observable<number>{
    return this.http.get<number>(getAverageStudentMess.api);
  }

  getStudentNoInteraction(days : string) : Observable<Student[]> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
    let params = new HttpParams().set('days',days);
    return this.http.get<Student[]>(getStudentNonInteraction.api , {headers: headers, params: params})
  }
  
}
