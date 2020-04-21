import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Staff } from './models/staff';
import { LoginComponent } from './components/login/login.component';
import { Student } from './models/student';
import { Tutor } from './models/tutor';
import { User } from './models/user';
import { File } from './models/files';
import { Schedule } from './models/schedule';
import { getStaff, getStudent, getTutor, getSchedule, getFile, uploadFile } from './models/api';
import { map, catchError } from 'rxjs/operators';


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

    getTutorById(id ): Observable<Tutor>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('id',id);
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

    getFile(classId ): Observable<File[]>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('classId',classId);
      return this.http.get<File[]>(getFile.api,{ headers: headers, params: params })
    }

    uploadFile(classId, nameFile ): Observable<boolean>{
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
      let params = new HttpParams().set('classId',classId).set('file', nameFile)
      return this.http.post<boolean>(uploadFile.api,{ headers: headers, params: params }).pipe(
        map(userData => {return true}),
        catchError(error => of(false)))
    }
}
