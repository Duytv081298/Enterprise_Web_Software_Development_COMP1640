import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddClassService {
  private addClassAPI = 'http://localhost:8080/classes'
  constructor(private http : HttpClient) { }
  addClass(classId, studentId, tutorId) : Observable<boolean> {
    return this.http.post<boolean>(this.addClassAPI,{classId, studentId, tutorId})
  }

}
