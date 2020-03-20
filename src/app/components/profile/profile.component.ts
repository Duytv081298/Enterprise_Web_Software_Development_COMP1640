import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showsidebar(){
    let y = document.getElementById('sidebar');
  
    let x = document.getElementById('test');

    if (x.style.display === "none" && y.classList.toggle("!active")) {
      y.classList.toggle('active');
      x.style.display = "block";
    } else {
      // y.classList.toggle('active');
      x.style.display = "none";
    } 
  }

}
