import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTutorStudentsComponent } from './list-of-tutor-students.component';

describe('ListOfTutorStudentsComponent', () => {
  let component: ListOfTutorStudentsComponent;
  let fixture: ComponentFixture<ListOfTutorStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTutorStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTutorStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
