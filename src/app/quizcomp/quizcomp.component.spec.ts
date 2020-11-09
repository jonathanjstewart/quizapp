import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizcompComponent } from './quizcomp.component';

describe('QuizcompComponent', () => {
  let component: QuizcompComponent;
  let fixture: ComponentFixture<QuizcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
