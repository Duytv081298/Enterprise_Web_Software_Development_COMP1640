import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountClassificationService {
  private typeAccount = new BehaviorSubject<String>(null);
  public share = this.typeAccount.asObservable();
  constructor() { }
  shareTypeAccount(typeAccount){
    this.typeAccount.next(typeAccount)
  }
}
