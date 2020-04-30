import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getMessage } from 'src/app/models/api';
import { Message } from './app/models/message';




@Injectable({
    providedIn: 'root'
  })


export class ChatService{

    getMessage(classId) : Observable<Message[]> {
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
        let params = new HttpParams().set('classId',classId);
        
        return this.http.get<Message[]>(getMessage.api, {headers: headers, params: params})
    } 
    
      constructor(private http:HttpClient) {

    }

    private socket = io('http://localhost:3000');

    joinRoom(data)
    {
        this.socket.emit('join',data);
    }

    newUserJoined()
    {
        let observable = new Observable<{user:string, message:string, time: Date}>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    leaveRoom(data){
        this.socket.emit('leave',data);
    }

    userLeftRoom(){
        let observable = new Observable<{user:string, message:string, time: Date}>(observer=>{
            this.socket.on('left room', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data)
    {
        this.socket.emit('message',data);
    }

    newMessageReceived(){
        let observable = new Observable<{user:string, message:string, time: Date}>(observer=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
}

