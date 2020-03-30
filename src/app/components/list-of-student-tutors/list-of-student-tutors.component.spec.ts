import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfStudentTutorsComponent } from './list-of-student-tutors.component';

describe('ListOfStudentTutorsComponent', () => {
  let component: ListOfStudentTutorsComponent;
  let fixture: ComponentFixture<ListOfStudentTutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfStudentTutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfStudentTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
