import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {LoginService} from '../login/login.service'
import { User } from 'src/app/models/user';
import { Tutor } from 'src/app/models/tutor';
import { Student } from 'src/app/models/student';
import { Staff } from 'src/app/models/staff';
import { Router } from '@angular/router';
import { AccountClassificationService } from 'src/app/services/account-classification.service';
import { ShareStaffService } from 'src/app/services/share-staff.service';
import { TutorDetailService } from 'src/app/services/tutor-detail.service';
import { StudentDetailService } from 'src/app/services/student-detail.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  user: User;
  result : String;
  ismodelShow : String

  constructor(
    private router: Router,
    private loginService: LoginService,
    private typeAccount : AccountClassificationService,
    // private staff : ShareStaffService,
    // private tutor: TutorDetailService,
    // private student: StudentDetailService
    
    ) { }
  ngOnInit(): void {}

  loginUser(username, password){
      this.loginService.getUser(username, password)
      .subscribe(
        data => {
          this.user = data
          if( this.user == null){
            this.result = 'e-mail'
          }else{
            let element: HTMLElement = document.getElementsByClassName('btn')[0] as HTMLElement;
            element.click();
            if(this.user.type = 'staff'){
              this.setTypeUser(this.user.type+'')
              this.router.navigate(['/staff/Dashboard'])
              this.typeAccount.shareTypeAccount(this.user)
            }else if(this.user.type = 'tutor'){
              this.setTypeUser(this.user.type+'')
              this.router.navigate(['/staff/Dashboard'])
              this.typeAccount.shareTypeAccount(this.user)
            }else if(this.user.type = 'student'){
              this.setTypeUser(this.user.type+'')
              this.router.navigate(['/staff/Dashboard'])
              this.typeAccount.shareTypeAccount(this.user)
            }
          }
        })
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('typeUser')
    return !(user === null)
  }
  getTypeUser(): string{
    let typeUser = sessionStorage.getItem('typeUser')
    console.log(typeUser)
    return typeUser
  }
  setTypeUser(type: string){
    sessionStorage.setItem('typeUser', type)
    console.log(type)
  }

  logOut() {
    sessionStorage.removeItem('typeUser')
    this.router.navigate(['/Homepage'])
  }

  // shareInfor(){
  //   if(this.user.type == 'staff'){
  //     this.staff.shareStaff(this.user)
  //   }else if(this.user.type == 'tutor'){
  //     this.tutor.shareTutor(this.user)
  //   }else if(this.user.type == 'student'){
  //     this.student.shareStudent(this.user)
  //   }
  // }
}
