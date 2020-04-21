import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from 'src/app/models/class';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getClassByTutor, getClassByStudent } from 'src/app/models/api';

@Injectable({
  providedIn: 'root'
})
export class ListClassService {
  
  getClass(tutorId) : Observable<Class[]> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
    let params = new HttpParams().set('tutorId',tutorId);
    
    return this.http.get<Class[]>(getClassByTutor.api, {headers: headers, params: params})
  } 

  getClassByStudent(studentID) : Observable<Class> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
    let params = new HttpParams().set('studentId',studentID);
    
    return this.http.get<Class>(getClassByStudent.api, {headers: headers, params: params})
  } 

  constructor(private http:HttpClient) { }
}
