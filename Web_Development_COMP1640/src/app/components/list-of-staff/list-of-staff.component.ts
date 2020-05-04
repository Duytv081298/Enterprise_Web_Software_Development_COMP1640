import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Staff } from 'src/app/models/staff';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EtutoringService } from 'src/app/etutoring.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-list-of-staff',
  templateUrl: './list-of-staff.component.html',
  styleUrls: ['./list-of-staff.component.css']
})
export class ListOfStaffComponent implements OnInit {
  displayedColumns = ['no', 'id', 'name', 'dob', 'email', 'phone', 'address', 'action'];

  dataSource: MatTableDataSource<Staff>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  constructor(private etutoringService: EtutoringService) { }

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff():void{
    this.etutoringService.getListStaff().pipe(
      map(receivedStudents => 
        {
          let staffs: Staff[] = []
          receivedStudents.forEach(a => {
            let staff:Staff = {
              id :a[0],
              name:a[1],
              phoneNumber: a[2],
              email: a[3],
              address: a[4],
              dateOfBirth: a[5],
              avatar:a[6],
              username: a[7]
            }
            staffs.push(staff)
          })
          return staffs
      }) ,
      catchError(error => of([]))
    ).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } )
  }

  onSelect(staff: Staff){
    sessionStorage.removeItem('superStaffSelectStaff')
    sessionStorage.setItem('superStaffSelectStaff',JSON.stringify(staff))
  }

}
