import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AppComponent {
  title = 'Web-Development-COMP1640';
  typeAccount :String;
  // typeAccount = 'tutor';
  receiveMessage($event) {
    this.typeAccount = $event;
  }

constructor(config: NgbModalConfig, private modalService: NgbModal) {
  // customize default values of modals used by this component tree
  config.backdrop = 'static';
  config.keyboard = false;
}

open(content) {
  this.modalService.open(content);
}
}
