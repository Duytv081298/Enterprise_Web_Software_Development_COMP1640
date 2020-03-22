import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-history',
  templateUrl: './operation-history.component.html',
  styleUrls: ['./operation-history.component.css']
})
export class OperationHistoryComponent implements OnInit {
  date2: number = Date.now()
  date1: number = Date.now();
  
  updateDate1(e) {
  this.date1 = e.target.value
  };
  updateDate2(e) {
  this.date2 = e.target.value 
  };
  constructor() {
    // let todayString : string = this.formatDate(new Date().toDateString());
  }
  ngOnInit(): void {
  }

}