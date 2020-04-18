import { Component, OnInit, Input } from '@angular/core';
import { EtutoringService } from 'src/app/etutoring.service';
import { LoginComponent } from '../login/login.component';
import { User } from 'src/app/models/user';
import { Schedule, Slot } from 'src/app/models/schedule';
import { map } from 'rxjs/operators';
import { Tutor } from 'src/app/models/tutor';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  user: User = this.loginComponent.getUser()
  @Input() tutor: Tutor
  @Input() student: Student
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

  weeks = this.getWeek()
  slotArrays = [[]]
  schedules: Schedule;

  constructor(private etutoringService: EtutoringService,
    private loginComponent: LoginComponent) {
  }

  ngOnInit(): void {
    this.receiveData()
    this.getSchedule()
  
  }

  getWeek(): string[] {

    let curr = new Date();

    let first = curr.getDate() - curr.getDay();
    let firstday = this.formatDate(new Date(curr.setDate(first)).toUTCString())
    let last = first + 6;
    let lastday = this.formatDate(new Date(curr.setDate(last)).toUTCString())
    let weeks = [firstday + ' to ' + lastday]

    for (let i = 1; i <= 10; i++) {

      let beforeFirsts = first + 7 * i
      let beforeFirstDays = this.formatDate(new Date(curr.setDate(beforeFirsts)).toUTCString())

      let beforeLasts = beforeFirsts + 6
      let beforeLastDays = this.formatDate(new Date(curr.setDate(beforeLasts)).toUTCString())
      weeks.push(beforeFirstDays + ' to ' + beforeLastDays)

      let behindFirsts = first - 7 * i

      let bindFirstDays = this.formatDate(new Date(curr.setDate(behindFirsts)).toUTCString())
      let behindLasts = behindFirsts - 6
      let bindLastDays = this.formatDate(new Date(curr.setDate(behindLasts)).toUTCString())

      weeks.splice(0, 0, bindFirstDays + ' to ' + bindLastDays)
    }
    return weeks
  }
  receiveData() {
    this.user = this.loginComponent.getUser()

    if (this.user != null) {

      if (this.user.type == 'staff') {
        this.etutoringService.getStaff(this.loginComponent.getUser().username).subscribe(
          data => {
          })
      } else if (this.user.type == 'tutor') {
        this.etutoringService.getTutor(this.loginComponent.getUser().username).subscribe(
          data => {
            this.etutoringService.getSchedule('tutorId', data.id).subscribe(
              data => {
                this.schedules = data
                this.addSlot(data)
              }
            )
          })
      } else if (this.user.type == 'student') {
        this.etutoringService.getStudent(this.loginComponent.getUser().username).subscribe(
          data => {
            this.etutoringService.getSchedule('studentId', data.id).subscribe(
              data => {
                this.schedules = data
                this.addSlot(data)
              })
          })
      }
    }
  }
  getSchedule() {
    if (this.tutor != null) {
      this.etutoringService.getSchedule('tutorId', this.tutor.id).subscribe(
        data => {
          this.schedules = data
          this.addSlot(data)
        }
      )
    } if (this.student != null) {
      this.etutoringService.getSchedule('studentId', this.student.id).subscribe(
        data => {
          this.schedules = data
          this.addSlot(data)
        }
      )
    }
  }
  addSlot(data) {
    data.calendarDtoList.forEach(element => {
      var resultArray = Object.keys(element).map(function (personNamedIndex) {
        let person = element[personNamedIndex];
        return person;
      });
      this.slotArrays.push(resultArray)
    });
    this.slotArrays = this.slotArrays.splice(1)
    for (let i = 1; i <= 8; i++) {
      for (let j = 0; j <= 6; j++) {
        if (j == 0) {
          this.day1 = this.slotArrays[j][i]
        } else if (j == 1) {
          this.day2 = this.slotArrays[j][i]
        } else if (j == 2) {
          this.day3 = this.slotArrays[j][i]
        } else if (j == 3) {
          this.day4 = this.slotArrays[j][i]
        } else if (j == 4) {
          this.day5 = this.slotArrays[j][i]
        }
        else if (j == 5) {
          this.day6 = this.slotArrays[j][i]
        }
        else {
          this.day7 = this.slotArrays[j][i]
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
    let startDate = selectWeek.substring(0, 10)
    let endDate = selectWeek.slice(-10)
  }
}
