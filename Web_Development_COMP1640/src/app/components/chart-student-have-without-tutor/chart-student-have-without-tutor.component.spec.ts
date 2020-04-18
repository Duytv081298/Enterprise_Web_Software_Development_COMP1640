import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStudentHaveWithoutTutorComponent } from './chart-student-have-without-tutor.component';

describe('ChartStudentHaveWithoutTutorComponent', () => {
  let component: ChartStudentHaveWithoutTutorComponent;
  let fixture: ComponentFixture<ChartStudentHaveWithoutTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStudentHaveWithoutTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStudentHaveWithoutTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
