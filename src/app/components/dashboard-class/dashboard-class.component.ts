import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TutorService } from '../list-of-tutors/tutor.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ListClassService } from '../list-class/list-class.service';
import { StudentByTutor } from 'src/app/models/studentByTutor';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-dashboard-class',
  templateUrl: './dashboard-class.component.html',
  styleUrls: ['./dashboard-class.component.css']
})

export class DashboardClassComponent implements OnInit {

  // tutorStudent: StudentByTutor[] = []

  displayedColumns = ['no', 'tutorName', 'studentName'];

  dataSource: MatTableDataSource<StudentByTutor>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private tutorService: TutorService,
    private listClassService: ListClassService) { }

  ngOnInit(): void {
    this.getStudentByTutor();
  }

  getStudentByTutor() {
    this.tutorService.getTutor().pipe(
      map(receivedTutor => {
        let students: StudentByTutor[] = []
        receivedTutor.forEach(a => {
          let student: StudentByTutor = {
            tutorId: a[0],
            tutorName: a[1],
          }
          let tutorId = student.tutorId
          let tutorName = student.tutorName

          this.listClassService.getClass(tutorId).pipe(
            map(receivedStudents => {     
              let studentNames : string[] = []
              receivedStudents.forEach(a => {
                let studentName = a[1]
                studentNames.push(studentName)
              })
              let student: StudentByTutor = {
                tutorId: tutorId,
                tutorName: tutorName,
                studentName: studentNames,
              }
              students.push(student)
              return students
            }),
            catchError(error => of([]))
          ).subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          })
        })
        return students
      }),
      catchError(error => of([]))
    ).subscribe(data => {
      // this.dataSource = new MatTableDataSource(data);
    })
  }

}