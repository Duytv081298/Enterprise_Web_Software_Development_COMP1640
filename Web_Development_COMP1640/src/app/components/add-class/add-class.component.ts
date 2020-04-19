import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../list-of-students/students.service";
import { Student } from "src/app/models/student";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { TutorService } from "../list-of-tutors/tutor.service";
import { Tutor } from "src/app/models/tutor";
import { AddClassService } from "./add-class.service";

import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from "@angular/forms";
import { ValueTransformer } from "@angular/compiler/src/util";

@Component({
  selector: "app-add-class",
  templateUrl: "./add-class.component.html",
  styleUrls: ["./add-class.component.css"],
})
export class AddClassComponent implements OnInit {
  students: Student[] = [];
  tutors: Tutor[] = [];
  studentSelected
  form: FormGroup;
  isSuccess: boolean;
  showDialogfalse = null;
  showDialogtrue = null;
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

  addClass( tutorId) {
  //   this.addClassService
  //     .addClass("1", studentId, tutorId)
  //     .subscribe((data) => (this.isSuccess = data));
  //   this.checkSuccess(this.isSuccess);
  this.takeIdStudent(this.studentSelected);
  }

  checkSuccess(isSuccess) {
    if (isSuccess == false) {
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
    console.log(this.form.value);
    let objectStudent = this.form.value
    let resultArray = Object.keys(objectStudent).map(function(personNamedIndex){
      let person = objectStudent[personNamedIndex];
      return person;
    });
    this.studentSelected = resultArray;
    console.log(this.studentSelected);
    let element: HTMLElement = document.getElementsByClassName('close-select-form')[0] as HTMLElement;
        element.click();
  }

  takeIdStudent(studentSelected) {
    studentSelected.forEach(element => {
      element.forEach(element => {
        console.log(element)
        let index = element.indexOf(" ");
        let idStudent = element.substring(0,index);
        console.log(idStudent)
      });
    });
      
  }
}
