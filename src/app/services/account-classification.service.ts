import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { from } from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountClassificationService {

  account: User = {    username: null,
    password: null,
    type: null,
    lastLogin: null
  }

  private typeAccount = new BehaviorSubject<User>(this.account);
  public share = this.typeAccount.asObservable();
  constructor() { }
  shareTypeAccount(User){
    this.typeAccount.next(User)
  }
}
