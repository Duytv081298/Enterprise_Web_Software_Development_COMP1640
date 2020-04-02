import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-Development-COMP1640';
  typeAccount :String;
  // typeAccount = 'tutor';
  receiveMessage($event) {
    this.typeAccount = $event;
  }


}
