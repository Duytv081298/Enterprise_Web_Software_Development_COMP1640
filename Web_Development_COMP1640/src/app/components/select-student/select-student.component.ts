import { Component, OnInit } from '@angular/core';

import { Student } from 'src/app/models/student';
import { StudentsService } from '../list-of-students/students.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.css']
})
export class SelectStudentComponent implements OnInit {
  students: Student[] = [];
  form: FormGroup;
  
  constructor(private studentsService: StudentsService,
              private fb: FormBuilder) { 
    this.form = this.fb.group({
    checkArray: this.fb.array([], [Validators.required])
    })  
  }

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent():void{
    this.studentsService.getStudentUndeclared().pipe(
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
      this.students = data
    } )
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

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
    console.log(this.form.value)
  }
}
