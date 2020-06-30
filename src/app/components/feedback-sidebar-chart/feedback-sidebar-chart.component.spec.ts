import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSidebarChartComponent } from './feedback-sidebar-chart.component';

describe('FeedbackSidebarChartComponent', () => {
  let component: FeedbackSidebarChartComponent;
  let fixture: ComponentFixture<FeedbackSidebarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSidebarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSidebarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
