import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMajorsComponent } from './list-of-majors.component';

describe('ListOfMajorsComponent', () => {
  let component: ListOfMajorsComponent;
  let fixture: ComponentFixture<ListOfMajorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfMajorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMajorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
