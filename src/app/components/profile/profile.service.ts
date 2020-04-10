import { Injectable } from '@angular/core';
import {Observable, from} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Staff } from 'src/app/models/staff';
import { Student } from 'src/app/models/student';
import { Tutor } from 'src/app/models/tutor';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, ) { }
  private getUserAPI = 'http://localhost:8080/staffs';
  getUser(staffId ): Observable<Staff>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
    let params = new HttpParams().set('staffId',staffId);
    return this.http.get<Staff>(this.getUserAPI,{ headers: headers, params: params })
  }
}
