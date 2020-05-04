import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Staff } from './models/staff';
import { LoginComponent } from './components/login/login.component';
import { Student } from './models/student';
import { Tutor } from './models/tutor';
import { File } from './models/files';
import { Schedule } from './models/schedule';
import { getStaff, getStudent, getTutor, getSchedule, getFile, uploadFile, addSchedule, addMess, getListStaff } from './models/api';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EtutoringService {
  constructor(private http: HttpClient,
    private loginComponent: LoginComponent, ) { }

  getStaff(username): Observable<Staff> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let params = new HttpParams().set('username', username);
    return this.http.get<Staff>(getStaff.api, { headers: headers, params: params })
  }

  getStudent(username): Observable<Student> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let params = new HttpParams().set('username', username);
    return this.http.get<Student>(getStudent.api, { headers: headers, params: params })
  }

  getTutor(username): Observable<Tutor> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let params = new HttpParams().set('username', username);
    return this.http.get<Tutor>(getTutor.api, { headers: headers, params: params })
  }

  getTutorById(id): Observable<Tutor> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let params = new HttpParams().set('id', id);
    return this.http.get<Tutor>(getTutor.api, { headers: headers, params: params })
  }

  getUserbyUserName(type, username) {
    if (type == 'staff') {
      return this.getStaff(username)
    } else if (type == 'tutor') {
      return this.getTutor(username)
    } else if (type == 'student') {
      return this.getStudent(username)
    }
  }

  getSchedule(userId: string, id, fromDate, toDate): Observable<Schedule> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let params = new HttpParams().set(userId, id).set('fromDate', fromDate).set('toDate', toDate)
    // params.append('fromDate',fromDate)
    // params.append('toDate',toDate)
    return this.http.get<Schedule>(getSchedule.api, { headers: headers, params: params })
  }

  getFile(classId): Observable<File[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let params = new HttpParams().set('classId', classId);
    return this.http.get<File[]>(getFile.api, { headers: headers, params: params })
  }

  uploadFile(classId, nameFile): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let params = new HttpParams().set('classId', classId).set('file', '')
    return this.http.post<boolean>(uploadFile.api, { headers: headers, params: params }, nameFile).pipe(
      map(userData => { return true }),
      catchError(error => of(false)))
  }

  addSchedule(id, date, slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8): Observable<boolean> {
    return this.http.post<boolean>(addSchedule.api, { id, date, slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8 }).pipe(
      catchError(error => of(false)),
      map(scheduleData => { return true })
    )
  }

  addMess(messageId, classId, time, content, sender): Observable<boolean> {
    return this.http.post<boolean>(addMess.api, { messageId, classId, time, content, sender }).pipe(
      catchError(error => of(false)),
      map(messData => { return true })
    )
  }

  getListStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(getListStaff.api)
  }
  
}
