import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Staff } from './models/staff';
import { LoginComponent } from './components/login/login.component';
import { AccountClassificationService } from './services/account-classification.service';
import { Student } from './models/student';
import { Tutor } from './models/tutor';
import { User } from './models/user';



@Injectable({
  providedIn: 'root'
})
export class EtutoringService {
  constructor(private http: HttpClient, 
    private loginComponent :LoginComponent,
    private typeAccount : AccountClassificationService) { }

    private getStaffAPI = 'http://localhost:8080/staffs';
    private getStudentAPI = 'http://localhost:8080/students';
    private getTutorAPI = 'http://localhost:8080/tutors';

    getStaff(username ): Observable<Staff>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('username',username);
      return this.http.get<Staff>(this.getStaffAPI,{ headers: headers, params: params })
    }
    getStudent(username ): Observable<Student>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('username',username);
      return this.http.get<Student>(this.getStudentAPI,{ headers: headers, params: params })
    }
    getTutor(username ): Observable<Tutor>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('username',username);
      return this.http.get<Tutor>(this.getTutorAPI,{ headers: headers, params: params })
    }
    setUser(): User {
      return this.loginComponent.getUser()
    }
}
