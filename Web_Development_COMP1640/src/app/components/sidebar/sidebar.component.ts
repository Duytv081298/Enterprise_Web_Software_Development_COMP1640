import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EtutoringService } from 'src/app/etutoring.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: User = null
  username: string
  avatar: string
  getUser: SubscriptionLike
  accountStaff = null;
  
  constructor(private etutoringService: EtutoringService) { }

  ngOnInit(): void {
  }
  
  ngDoCheck() {
    this.CheckAccount();
  }

  CheckAccount() {
    let newUser = this.user
    this.user = JSON.parse(sessionStorage.getItem('user'))
    if (this.user.type == 'staff') {
        this.accountStaff = 'staff';
        this.receiveData()
        if(newUser.username == this.user.username){
          this.getUser.unsubscribe()
        }
    }
  }

  receiveData() {
      this.getUser = this.etutoringService.getUserbyUserName(this.user.type, this.user.username).subscribe(data => {
        this.username = data.name
        this.avatar = data.avatar
      })
  }
}