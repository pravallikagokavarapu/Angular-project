import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedassessmentComponent } from './completedassessment.component';

describe('CompletedassessmentComponent', () => {
  let component: CompletedassessmentComponent;
  let fixture: ComponentFixture<CompletedassessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedassessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
