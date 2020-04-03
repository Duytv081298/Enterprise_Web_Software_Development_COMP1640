import { Injectable } from '@angular/core';

import {User} from '../../models/user'
import {Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, ) { }
  private getUserAPI = 'http://localhost:8080/common/login';

  getUser(username, password ): Observable<User>{
    return this.http.post<User>(this.getUserAPI,{
      username,
      password
    })
  }
}
