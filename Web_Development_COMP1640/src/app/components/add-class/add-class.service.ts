import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { addClass, getNumberStudentOfTutor } from 'src/app/models/api';
import { AddClass } from 'src/app/models/class';

@Injectable({
  providedIn: 'root'
})
export class AddClassService {
  
  constructor(private http : HttpClient) { }
  addClass(studentId, tutorId, classId = 0) : Observable<boolean> {
    let listClass : AddClass[] = []
    studentId.forEach(element => {
      let classes = {
        classId : classId,
        studentId: element,
        tutorId : tutorId
      }
      listClass.push(classes);

    });
    return this.http.post<boolean>(addClass.api, listClass)
  }

  getNumberStudent(tutorId) : Observable<number>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}); 
    let params = new HttpParams().set('id',tutorId);
    return this.http.get<number>(getNumberStudentOfTutor.api , {headers: headers, params: params})
  }
}
