import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Staff } from './models/staff';
import { LoginComponent } from './components/login/login.component';
import { Student } from './models/student';
import { Tutor } from './models/tutor';
import { User } from './models/user';
import { Schedule } from './models/schedule';
import { getStaff, getStudent, getTutor, getSchedule } from './models/api';


@Injectable({
  providedIn: 'root'
})

export class EtutoringService {
  constructor(private http: HttpClient, 
    private loginComponent :LoginComponent,) { }

    getStaff(username ): Observable<Staff>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('username',username);
      return this.http.get<Staff>(getStaff.api,{ headers: headers, params: params })
    }

    getStudent(username ): Observable<Student>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('username',username);
      return this.http.get<Student>(getStudent.api,{ headers: headers, params: params })
    }

    getTutor(username ): Observable<Tutor>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('username',username);
      return this.http.get<Tutor>(getTutor.api,{ headers: headers, params: params })
    }

    getUserbyUserName( type,username){
      if(type == 'staff'){
        return this.getStaff(username)
      }else if(type == 'tutor'){
        return this.getTutor(username)
  
      }else if(type == 'student') {
        return this.getStudent(username)
      }
    }

    getSchedule(userId: string, id  ): Observable<Schedule>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set(userId,id);
      return this.http.get<Schedule>(getSchedule.api,{ headers: headers, params: params })
    }

    setUser(): User {
      return this.loginComponent.getUser()
    }

}
