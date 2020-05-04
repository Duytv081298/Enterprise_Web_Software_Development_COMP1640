import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperStaffComponent } from './super-staff.component';

describe('SuperStaffComponent', () => {
  let component: SuperStaffComponent;
  let fixture: ComponentFixture<SuperStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
