import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorBlogComponent } from './tutor-blog.component';

describe('TutorBlogComponent', () => {
  let component: TutorBlogComponent;
  let fixture: ComponentFixture<TutorBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
