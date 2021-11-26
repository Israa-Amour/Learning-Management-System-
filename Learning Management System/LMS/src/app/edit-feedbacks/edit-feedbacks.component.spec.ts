import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeedbacksComponent } from './edit-feedbacks.component';

describe('EditFeedbacksComponent', () => {
  let component: EditFeedbacksComponent;
  let fixture: ComponentFixture<EditFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
