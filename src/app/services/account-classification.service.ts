import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountClassificationService {

  private typeAccount = new BehaviorSubject<string>(null);
  public share = this.typeAccount.asObservable();
  constructor() { }
  shareTypeAccount(typeAccount :string){
    this.typeAccount.next(typeAccount)
  }
}
