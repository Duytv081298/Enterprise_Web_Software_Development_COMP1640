import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTutorsComponent } from './list-of-tutors.component';

describe('ListOfTutorsComponent', () => {
  let component: ListOfTutorsComponent;
  let fixture: ComponentFixture<ListOfTutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
