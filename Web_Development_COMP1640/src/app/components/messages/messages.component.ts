import { Component} from '@angular/core';
import { ChatService } from 'src/chat.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers:[ChatService]
})
export class MessagesComponent {
  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];
  constructor(private _chatService:ChatService){
      this._chatService.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));


      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));


  }

  join(){
      this._chatService.joinRoom({user:this.user, room:this.room});
  }

  leave(){
      this._chatService.leaveRoom({user:this.user, room:this.room});
  }

  sendMessage()
  {
      console.log(this.messageArray)

      this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }


}
