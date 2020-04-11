import { Injectable } from '@angular/core';

import {User} from '../../models/user'
import {Observable, from, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import {StudentsService} from '../list-of-students/students.service'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, ) { }
  private getUserAPI = 'http://localhost:8080/login';

  // getTypeUser(username, password): Observable<any>{
  //   let dados = {
  //     username : username,
  //     password: password
  //   }
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let body = JSON.stringify(dados);
  //   return this.http.post(this.getUserAPI, body)
  // }
  // getUsera(username, password ): Observable<User>{
  //   const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
  //   let params = new HttpParams().set('username',username);
  //   params = params.append('password',password);
  //   return this.http.get<User>(this.getUserAPI,{ headers: headers, params: params })
  // }

  getTypeUser(username, password): Observable<any>{
    let dados = {
      username : username,
      password: password}
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(dados);
    return this.http.post(this.getUserAPI, {username, password}).pipe(
      map(userData => {return userData}),
      catchError(error => of([])))
  }
  // getUser(username ): Observable<User>{
  //   const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
  //   let params = new HttpParams().set('username',username);
  //   return this.http.get<User>(this.getUserAPI,{ headers: headers, params: params })
  // }
  
}
