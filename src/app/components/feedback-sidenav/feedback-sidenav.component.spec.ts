import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSidenavComponent } from './feedback-sidenav.component';

describe('FeedbackSidenavComponent', () => {
  let component: FeedbackSidenavComponent;
  let fixture: ComponentFixture<FeedbackSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
