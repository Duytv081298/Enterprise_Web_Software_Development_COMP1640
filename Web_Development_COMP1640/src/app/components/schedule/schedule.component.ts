import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { EtutoringService } from 'src/app/etutoring.service';
import { LoginComponent } from '../login/login.component';

import { Schedule, Slot } from 'src/app/models/schedule';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit, DoCheck {

  studentId: string
  fromDate: string
  toDate: string
  slots: Slot[] = []
  timeOuts = ['Slot 1 (7:30-9:00)', 'Slot 2 (9:10-10:40)', 'Slot 3 (10:50-12:20)', 'Slot 4 (12:50-14:20)',
    'Slot 5 (14:30-16:00)', 'Slot 6 (16:10-17:40)', 'Slot 7 (17:50-19:20)', 'Slot 8 (19:30-21:00)']
  day1: boolean;
  day2: boolean;
  day3: boolean;
  day4: boolean;
  day5: boolean;
  day6: boolean;
  day7: boolean;

  weekUp = this.getWeekOne().reverse()
  weekDown = this.getWeek()
  weeks = this.weekDown.concat(this.weekUp)
  
  slotArrays = [[]]
  schedules: Schedule;

  constructor(private etutoringService: EtutoringService) {
  }
  ngOnInit(): void {
    this.getScheduleByStudent(this.fromDate,this.toDate)
  }
  ngDoCheck() {
   this.studentId = sessionStorage.getItem("idStudent")
   
  }
  getWeekOne(): string[]{
      let cur = new Date();
      let firstUp = cur.getDate() - cur.getDay();
      let curMonth = cur.getMonth();
      let beforeMonth = cur.getMonth();
      let weekUp = []

      for(let i = 1; i<= 10; i++){
        let afterFirsts = firstUp + 7*i
        if(afterFirsts < 0){
            firstUp -= ( new Date(cur.getFullYear(), beforeMonth ,0).getDate())
            curMonth = curMonth + 1
            afterFirsts = firstUp + 7*i
          }
          var up = new Date();
          up.setMonth(curMonth)
          up.setDate(afterFirsts)
          up.toUTCString()
          let bindFirstDayUp = this.formatDate(up)
          let afterLasts = afterFirsts + 6
          let curMonthAfter = curMonth

          if(afterFirsts < new Date(cur.getFullYear(), curMonth ,0).getDate()){
            curMonthAfter = curMonth + 1
            afterLasts -= ( new Date(cur.getFullYear(), curMonth + 1,0).getDate())
          }
          var afterDayLast = new Date();
          afterDayLast.setMonth(curMonthAfter)
          afterDayLast.setDate(afterLasts)
          afterDayLast.toUTCString()
          let bindLastDayUp = this.formatDate(afterDayLast)
          weekUp.splice(0, 0, bindFirstDayUp + ' to ' + bindLastDayUp)   
      }
      return weekUp
  }
  getWeek(): string[] {
    
    let curr = new Date();
    let first = curr.getDate() - curr.getDay();
    let currMonth = curr.getMonth();
    
    let firstday = this.formatDate(new Date(curr.setDate(first)).toUTCString())
    this.fromDate = firstday
    let last = first + 6;
    let lastday = this.formatDate(new Date(curr.setDate(last)).toUTCString())
    this.toDate = lastday
    let weeks = [firstday + ' to ' + lastday]

    for (let i = 1; i <= 10; i++) {
      
      let behindFirsts = first - 7*i
      if(behindFirsts < 0) {
        first = first + new Date(curr.getFullYear(), currMonth ,0).getDate() 
        currMonth = currMonth - 1
        behindFirsts = first - 7*i
      }
      var d = new Date();
      d.setMonth(currMonth)
      d.setDate(behindFirsts)
      d.toUTCString()
      let bindFirstDays = this.formatDate(d)
      let behindLasts = behindFirsts + 6
      let currMonthLast = currMonth

      if(behindLasts > new Date(curr.getFullYear(), currMonth ,0).getDate()){
        currMonthLast = currMonth + 1
        behindLasts -=  ( new Date(curr.getFullYear(), currMonth + 1 ,0).getDate())
      }
      var behindDayLast = new Date();
      behindDayLast.setMonth(currMonthLast)
      behindDayLast.setDate(behindLasts)
      behindDayLast.toUTCString()
      let bindLastDays = this.formatDate(behindDayLast)
      weeks.splice(0, 0, bindFirstDays + ' to ' + bindLastDays)
    }
    return weeks
  }
  
  getScheduleByStudent(fromDate, toDate){
    this.etutoringService.getSchedule('studentId', this.studentId,fromDate, toDate).subscribe(
      data => {
        this.schedules = data
        this.addSlot(data)
        
      }
    )
  }
  addSlot(data) {
    
    this.slots = []
    this.slotArrays = [[]]
    data.forEach(element => {
      let arrChild = []
      var resultArray = Object.keys(element).map(function (b) {
        let person = element[b];
        var array = Object.keys(person).map(function (c) {
          let p = person[c];
          return p;
        });
        arrChild.push(array)
        return person;
      });
      this.slotArrays.push(arrChild)
    });
      this.slotArrays.splice(0,1)
    for (let i = 1; i <= 8; i++) {
      for (let j = 0; j <= 6; j++) {
        if (j == 0) {
          this.day1 = this.slotArrays[j][i][1]
        } else if (j == 1) {
          this.day2 = this.slotArrays[j][i][1]
        } else if (j == 2) {
          this.day3 = this.slotArrays[j][i][1]
        } else if (j == 3) {
          this.day4 = this.slotArrays[j][i][1]
        } else if (j == 4) {
          this.day5 = this.slotArrays[j][i][1]
        } else if (j == 5) {
          this.day6 = this.slotArrays[j][i][1]
        } else {
          this.day7 = this.slotArrays[j][i][1]
        }
      }
      let slot: Slot = {
        timeout: this.timeOuts[i - 1],
        day1: this.day1, day2: this.day2, day3: this.day3, day4: this.day4, day5: this.day5, day6: this.day6, day7: this.day7
      }
      this.slots.push(slot) 
    }
  }
  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  selectWeek(selectWeek) {
    this.fromDate = selectWeek.substring(0, 10)
    this.toDate = selectWeek.slice(-10)
    this.getScheduleByStudent(selectWeek.substring(0, 10),selectWeek.slice(-10))

  }
}
