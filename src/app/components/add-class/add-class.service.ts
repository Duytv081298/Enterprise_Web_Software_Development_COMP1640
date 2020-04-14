import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getStudent } from 'src/app/models/api';

@Injectable({
  providedIn: 'root'
})
export class AddClassService {
  
  constructor(private http : HttpClient) { }
  addClass(classId, studentId, tutorId) : Observable<boolean> {
    return this.http.post<boolean>(getStudent.api,{classId, studentId, tutorId})
  }

}
