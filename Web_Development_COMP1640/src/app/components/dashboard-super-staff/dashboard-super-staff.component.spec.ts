import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSuperStaffComponent } from './dashboard-super-staff.component';

describe('DashboardSuperStaffComponent', () => {
  let component: DashboardSuperStaffComponent;
  let fixture: ComponentFixture<DashboardSuperStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSuperStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSuperStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
