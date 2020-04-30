import { Component, OnInit } from '@angular/core';
import { ListClassService } from '../list-class/list-class.service';
import { map, catchError } from 'rxjs/operators';
import { Class } from 'src/app/models/class';
import { of } from 'rxjs';
import { EtutoringService } from 'src/app/etutoring.service';
import { Student } from 'src/app/models/student';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  showDialogfalse = null;
  showDialogtrue = null;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  isDialog = null
  isSuccess = null
  dataDialog: string
  class : Class[]=[]
  studentId: String
  constructor(private listClassService: ListClassService,
              private etutoringService: EtutoringService) { }

  user = JSON.parse(sessionStorage.getItem('user'))
  ngOnInit(): void {
    this.getId()
    
  }

  getClass(tutorId : string):void{
    this.listClassService.getClass(tutorId).pipe(
      map(receivedStudents => {
          let students: Class[] = []
          receivedStudents.forEach(a => {
            let student:Class = {
              classId: a[0],
              studentId: a[1],
              studentName: a[2],
              tutorId: a[3],
             tutorName: a[4]
            }
            students.push(student)
          })
          return students
      }) ,
      catchError(error => of([]))
    ).subscribe(data =>{
      this.class = data
      this.onSelect(data[0].studentId + " " + data[0].studentName)
    } )
  }
  getId() {
    this.etutoringService.getTutor(
      JSON.parse(sessionStorage.getItem('user')).username).subscribe(
        data => {
          this.getClass(data.id)
      }
    )
  }
  onSelect(selectClass){
    sessionStorage.removeItem('idStudent')
    let idStudent = this.takeIdStudent(selectClass)
    sessionStorage.setItem("idStudent",idStudent)
    this.studentId = idStudent
  }

  takeIdStudent(studentSelected) : string {
      let index = studentSelected.indexOf(" ");
      let idStudent: string = studentSelected.substring(0, index);
      return idStudent;
  }
  getClassByStudent(studentId: string): void {
    this.listClassService.getClassByStudent(studentId).subscribe(data => {
    })
  }
  addSchedule(date: Date,slot){
    let slotArray = [false,false,false,false,false,false,false,false]
    slotArray[slot] = true
    if(this.isSuccess == null){
      this.dataDialog = "Please waiting! Your schedule will send to gmail for you"
      this.isDialog = "showDialog"
    }else{
      this.isSuccess = null
    }
    if(!date){
      this.dataDialog = "Please input date"
    }else{
        this.listClassService.getClassByStudent(this.studentId).subscribe(data => {
          this.etutoringService.addSchedule(data.classId,date,slotArray[0],slotArray[1],slotArray[2],slotArray[3],slotArray[4],slotArray[5],
            slotArray[6],slotArray[7]).subscribe(result =>{
              this.isSuccess = result
              this.checkSuccess()
            })
        })
    }
  }
  checkSuccess() {
    if (this.isSuccess == false) {
      this.showDialogfalse = "False";
      this.showDialogtrue = null;
    } else {
      this.showDialogtrue = "True";
      this.showDialogfalse = null;
    }
  }
}
