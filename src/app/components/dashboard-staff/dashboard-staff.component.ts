import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardStaffService } from './dashboard-staff.service';
import { map, catchError } from 'rxjs/operators';
import { Student } from 'src/app/models/student';
import { of, from } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard-staff',
  templateUrl: './dashboard-staff.component.html',
  styleUrls: ['./dashboard-staff.component.css']
})
export class DashboardStaffComponent implements OnInit {

  displayedColumns = ['no', 'id', 'name', 'lastLogin'];

  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  numStudent: Number;
  numTutor: Number;
  students: Student[] = [];

  constructor(private dashboardStaffService: DashboardStaffService) { }

  ngOnInit(): void {
    this.getNumberStudent();
    this.getNumberTutor();
    this.getStudentNoInteraction("7");

  }

  getNumberStudent(): void {
    this.dashboardStaffService.getNumberOfStudent().subscribe(data => this.numStudent = data);
  }

  getNumberTutor(): void {
    this.dashboardStaffService.getNumberOfTutor().subscribe(data => this.numTutor = data);
  }

  getStudentNoInteraction(days: string): void {
    console.log(days);
    let newstr = days.replace("days", " ");
    newstr = newstr.trim();

    this.dashboardStaffService.getStudentNoInteraction(newstr).pipe(
      map(receivedStudents => {
        let students: Student[] = []
        receivedStudents.forEach(a => {
          let student: Student = {
            id: a[0],
            name: a[1],
            phoneNumber: a[2],
            email: a[3],
            address: a[4],
            dateOfBirth: a[5],
            avatar: a[6],
            username: a[7],
            lastLogin: a[8]
          }
          students.push(student)
        })
        return students
      }),
      catchError(error => of([]))
    ).subscribe(data => {
      this.students = data
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
