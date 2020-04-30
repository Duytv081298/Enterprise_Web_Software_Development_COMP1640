import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../list-of-students/students.service";
import { Student } from "src/app/models/student";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { TutorService } from "../list-of-tutors/tutor.service";
import { Tutor } from "src/app/models/tutor";
import { AddClassService } from "./add-class.service";

import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { AddClass } from 'src/app/models/class';



@Component({
  selector: "app-add-class",
  templateUrl: "./add-class.component.html",
  styleUrls: ["./add-class.component.css"],
})
export class AddClassComponent implements OnInit {
  students: Student[] = [];
  tutors: Tutor[] = [];

  idStudent = [];
  num: number;

  studentSelected = [];
  form: FormGroup;
  isSuccess: boolean;
  showDialogfalse = null;
  showDialogtrue = null;
  selectedMax = null;
  selectedMin = null;

  constructor(
    private studentsService: StudentsService,
    private tutorService: TutorService,
    private addClassService: AddClassService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getStudent();
    this.getTutor();

  }

  addClass(tutorId) {
    this.addClassService.getNumberStudent(tutorId).subscribe(data => {
      this.num = data
      if(this.idStudent.length == 0){
        this.selectedMin = "min";
        this.selectedMax = null;
      }
      else if (this.idStudent.length > 10 - data) {
        this.selectedMax = "max";
        this.selectedMin = null;
      }
      else {
        this.selectedMax = null;
        this.selectedMin = null;
        this.addClassService.addClass(this.idStudent, tutorId).subscribe(data => console.log(data));
        this.checkSuccess();
      }
      
    });
  }

  checkSuccess() {
    if (this.isSuccess == false) {
      this.showDialogfalse = "False";
      this.showDialogtrue = null;
    } else {
      this.showDialogtrue = "True";
      this.showDialogfalse = null;
    }
  }

  getStudent(): void {
    this.studentsService
      .getStudentUndeclared()
      .pipe(
        map((receivedStudents) => {
          let students: Student[] = [];
          receivedStudents.forEach((a) => {
            let student: Student = {
              id: a[0],
              name: a[1],
              phoneNumber: a[2],
              email: a[3],
              address: a[4],
              dateOfBirth: a[5],
              avatar: a[6],
              username: a[7],
              lastLogin: a[8],
            };
            students.push(student);
          });
          return students;
        }),
        catchError((error) => of([]))
      )
      .subscribe((data) => {
        this.students = data;
      });
  }

  getTutor(): void {
    this.tutorService
      .getTutor()
      .pipe(
        map((receivedTutor) => {
          let tutors: Tutor[] = [];
          receivedTutor.forEach((a) => {
            let tutor: Tutor = {
              id: a[0],
              name: a[1],
              phoneNumber: a[2],
              email: a[3],
              address: a[4],
              dateOfBirth: a[5],
              avatar: a[6],
              username: a[7],
              lastLogin: a[8],
            };
            tutors.push(tutor);
          });
          return tutors;
        }),
        catchError((error) => of([]))
      )
      .subscribe((data) => {
        this.tutors = data;
      });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get("checkArray") as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    let objectStudent = this.form.value
    let resultArray = Object.keys(objectStudent).map(function (personNamedIndex) {
      let person = objectStudent[personNamedIndex];
      return person;
    });

    let studentArr = []
    resultArray.forEach(element => {
      element.forEach(element => {
        studentArr.push(element)
      });
    });
    this.studentSelected = studentArr;

    this.takeIdStudent(this.studentSelected)
  }

  takeIdStudent(studentSelected) {
    studentSelected.forEach(element => {

      let index = element.indexOf(" ");
      let idStudent: string = element.substring(0, index);

      this.idStudent.push(idStudent);
    });
  }

}
