import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from 'src/app/models/class';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getClass } from 'src/app/models/api';

@Injectable({
  providedIn: 'root'
})
export class ListClassService {
  
  getClass(tutorId) : Observable<Class[]> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
    let params = new HttpParams().set('tutorId',tutorId);
    
    return this.http.get<Class[]>(getClass.api, {headers: headers, params: params})
  } 

  constructor(private http:HttpClient) { }
}
