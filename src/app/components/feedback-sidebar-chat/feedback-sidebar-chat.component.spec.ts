import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSidebarChatComponent } from './feedback-sidebar-chat.component';

describe('FeedbackSidebarChatComponent', () => {
  let component: FeedbackSidebarChatComponent;
  let fixture: ComponentFixture<FeedbackSidebarChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSidebarChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSidebarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
