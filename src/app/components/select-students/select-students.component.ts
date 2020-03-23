import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-students',
  templateUrl: './select-students.component.html',
  styleUrls: ['./select-students.component.css']
})
export class SelectStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students: any[] = [
    {id: 'GCH16399',name: 'Lê Hông Thư', value: 'GCH16399', checked: false },
    {id: 'GCH16467',name: 'Trần Trung Hiếu', value: 'GCH16467', checked: true },
    {id: 'GCH17008',name: 'Vũ Thanh Hải', value: 'GCH17008', checked: false },
    {id: 'GCH16547',name: 'Nguyễn Thị Anh Anh', value: 'GCH16547', checked: false },
  ]
  checkAll(e){
    var checkAll = e.target.checked;
    if (this.students.every(val => val.checked == true)){
      checkAll = false;
      this.students.forEach(val => { val.checked = false });
    }
      
    else{
      checkAll = true;
      this.students.forEach(val => { val.checked = true });
    }
      
  }

}
