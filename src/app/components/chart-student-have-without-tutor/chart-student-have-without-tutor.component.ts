import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import { DashboardStaffService } from '../dashboard-staff/dashboard-staff.service';

@Component({
  selector: 'app-chart-student-have-without-tutor',
  templateUrl: './chart-student-have-without-tutor.component.html',
  styleUrls: ['./chart-student-have-without-tutor.component.css']
})
export class ChartStudentHaveWithoutTutorComponent implements OnInit {

  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  
  ngAfterViewInit(numStudent: number, numStudentNoTutor: number) {
      let numStudentHaveTutor = numStudent - numStudentNoTutor;

      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      let myChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
          labels: ["Students have a personal tutor", "Students without a personal tutor"],
          datasets: [{
            label: 'Messages',
            data: [numStudentHaveTutor, numStudentNoTutor],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          display: true,
          font: 30
        }
      });

  }

  constructor(private dashboardStaffService: DashboardStaffService) { 
    
  }

  ngOnInit(): void {
    this.getNumber();
  }

  getNumber(): void {
    let numStudent : number;
    let numStudentNoTutor : number;
    this.dashboardStaffService.getNumberOfStudent().subscribe(data => {
      numStudent = data
      this.dashboardStaffService.getNumberOfStudentNoTutor().subscribe(data => {
        numStudentNoTutor = data
        this.ngAfterViewInit(numStudent, numStudentNoTutor);
      });
    });
    
  }

}
