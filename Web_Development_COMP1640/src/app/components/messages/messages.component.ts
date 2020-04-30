import { Component, OnInit} from '@angular/core';
import { ChatService } from 'src/chat.service';
import { Tutor } from 'src/app/models/tutor';
import { Class } from 'src/app/models/class';
import { ListClassService } from '../list-class/list-class.service';
import { EtutoringService } from 'src/app/etutoring.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { File } from '../../models/files';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers:[ChatService]
})
export class MessagesComponent implements OnInit {
  typeUser = JSON.parse(sessionStorage.getItem('user')).type
  messageUser = JSON.parse(sessionStorage.getItem('user'))
  files: File[] =[]

  name
  avatar

  tutor: Tutor
  accountTutor = null;
  accountStudent = null;

  classId: string
  class : Class[]=[]
  user:string;
  room:string;
  messageText:string;
  messageArray:Array<{user:string,message:string}> = [];
  constructor(private _chatService:ChatService,
              private listClassService:ListClassService,
              private etutoringService:EtutoringService){
      this._chatService.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));


      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));
  }

  CheckAccount() {
    if (this.typeUser == 'tutor') {
      this.accountTutor = 'tutor';
    } else if (this.typeUser == 'student') {
      this.accountStudent = 'student';
    }
  }

  getUser(type,username){
    this.etutoringService.getUserbyUserName(type,username).subscribe(
      data =>{
        this.name = data.name
        this.avatar = data.avatar
        this.CheckAccount()
      }
    )
  }
  ngOnInit(): void {
    this.getId()
    this.getUser(JSON.parse(sessionStorage.getItem('user')).type, JSON.parse(sessionStorage.getItem('user')).username)

   }
  sendMessage()
  {
      console.log(this.messageArray)
      this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
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
    } )
  }
  getId() {
    this.etutoringService.getTutor(JSON.parse(sessionStorage.getItem('user')).username)
                         .subscribe(data => {this.tutor = data
                                             this.getClass(this.tutor.id)})                                       
  }
  selectStudent(classes : Class){
    this.user = this.tutor.id
    this.room =  classes.classId + ''
    this._chatService.joinRoom({user:this.user, room:this.room});
    this.getFile(classes.classId)
  }
  getFile(classId){
    this.classId = classId
    this.etutoringService.getFile(classId).subscribe(
      data => {this.files = data
      console.log(this.files)}
    )
  }
  addFile(file){
    console.log(file)
    this.etutoringService.uploadFile(this.classId, file).subscribe(data => {
      console.log(data)
    })
  }
}
