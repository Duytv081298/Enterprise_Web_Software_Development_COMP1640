import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Staff} from '../models/staff'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareStaffService {
  private selectStaff = new BehaviorSubject<Staff>(null);
  public share = this.selectStaff.asObservable();
  constructor() { }
  shareStaff(selectStaff){
    this.selectStaff.next(selectStaff)
  }
}
