import { Component, OnInit } from '@angular/core';
import { DashboardStaffService } from './dashboard-staff.service';

@Component({
  selector: 'app-dashboard-staff',
  templateUrl: './dashboard-staff.component.html',
  styleUrls: ['./dashboard-staff.component.css']
})
export class DashboardStaffComponent implements OnInit {

  numStudent : Number;
  numTutor : Number;
  constructor(private dashboardStaffService: DashboardStaffService) { }

  ngOnInit(): void {
    this.getNumberStudent();
    this.getNumberTutor();
  }

  getNumberStudent(): void{
    this.dashboardStaffService.getNumberOfStudent().subscribe(data => this.numStudent = data );
  }

  getNumberTutor(): void{
    this.dashboardStaffService.getNumberOfTutor().subscribe(data => this.numTutor = data );
  }
}
