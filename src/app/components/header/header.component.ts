import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  ngOnInit(): void {
  }
  // isOn:boolean = false;
  // show() {
  //   this.isOn = !this.isOn;
  // }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  openLogin() {
    this.modalRef = this.modalService.show(LoginComponent,  {
      initialState: {
        title: 'Modal title',
        data: {}
      }
    });
  }

}
