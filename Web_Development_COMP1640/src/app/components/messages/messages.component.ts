import { Component, OnInit} from '@angular/core';
import { ChatService } from 'src/chat.service';
import { Tutor } from 'src/app/models/tutor';
import { Class } from 'src/app/models/class';
import { ListClassService } from '../list-class/list-class.service';
import { EtutoringService } from 'src/app/etutoring.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers:[ChatService]
})
export class MessagesComponent implements OnInit {
  tutor: Tutor
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

  ngOnInit(): void {
    this.getId()
   }

  // leave(){
  //     this._chatService.leaveRoom({user:this.user, room:this.room});
  // }

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
      console.log(data)
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

  }

}
