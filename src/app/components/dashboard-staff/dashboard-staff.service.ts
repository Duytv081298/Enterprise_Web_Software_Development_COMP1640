import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class DashboardStaffService {

  constructor( private http: HttpClient) {

  }

  private getNumberOfStudentApi = 'http://localhost:8080/students/total'
  getNumberOfStudent() : Observable<number>{
    return this.http.get<number>(this.getNumberOfStudentApi);
  }

  private getNumberOfTutorApi = 'http://localhost:8080/tutors/total'
  getNumberOfTutor() : Observable<number>{
    return this.http.get<number>(this.getNumberOfTutorApi);
  }

  private getNumberOfStudentNoTutorApi = 'http://localhost:8080/students/total-undeclared'
  getNumberOfStudentNoTutor() : Observable<number>{
    return this.http.get<number>(this.getNumberOfStudentNoTutorApi);
  }

  private getStudentNonInteractionApi = 'http://localhost:8080/students/no-interaction'
  getStudentNoInteraction(days : string) : Observable<Student[]> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
    let params = new HttpParams().set('days',days);

    return this.http.get<Student[]>(this.getStudentNonInteractionApi , {headers: headers, params: params})
  }
  
}
