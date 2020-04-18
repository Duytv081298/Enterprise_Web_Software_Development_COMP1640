import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-blog',
  templateUrl: './student-blog.component.html',
  styleUrls: ['./student-blog.component.css']
})
export class StudentBlogComponent implements OnInit {
  openTextBox = "MINH THONG MINH VAI LON"
  closeTextBox = null

  constructor() { }

  ngOnInit(): void {
  }

  texting() {
    this.openTextBox = null
    this.closeTextBox = "DUY NGU"
  }

  cancel() {
    this.closeTextBox = null
    this.openTextBox = "MINH THONG MINH VAI LON"
  }

  

}
