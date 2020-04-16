import { Component, OnInit, ViewChild } from '@angular/core';

import {Student} from '../../models/student'
import {StudentsService} from '../list-of-students/students.service'
import { catchError, map } from 'rxjs/operators';
import {of} from 'rxjs'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {

  displayedColumns = ['no', 'id', 'name', 'email', 'phone', 'address', 'action'];

  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private studentsService: StudentsService,
    ) { }
  ngOnInit(): void {
    this.getStudent();
  }

  getStudent():void{
    this.studentsService.getStudent().pipe(
      map(receivedStudents => 
        {
          let students: Student[] = []
          receivedStudents.forEach(a => {
            let student:Student = {
              id :a[0],
              name:a[1],
              phoneNumber: a[2],
              email: a[3],
              address: a[4],
              dateOfBirth: a[5],
              avatar:a[6],
              username: a[7],
              lastLogin: a[8]
            }
            students.push(student)
          })
          return students
      }) ,
      catchError(error => of([]))
    ).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    } )
  }
  
  onSelect(student: Student){
    sessionStorage.removeItem('student')
    sessionStorage.removeItem('tutor')
    sessionStorage.setItem('student',JSON.stringify(student))
  }

}
