import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss'],
})
export class FeedbackListComponent implements OnInit {
  constructor() {}
  feedbacks = [
    {
      desc: 'Scale flagship course for freelance designers',
      status: 'Open',
      department: 'Marketing',
      author: 'Faizur',
    },
    {
      desc: 'Print Hello World on Framework',
      status: 'Closed',
      department: 'Technology',
      author: 'John Doe',
    },{
      desc: 'Scale flagship course for freelance designers',
      status: 'Submitted',
      department: 'Marketing',
      author: 'John Doe',
    },{
      desc: 'Scale flagship course for freelance designers',
      status: 'Open',
      department: 'Marketing',
      author: 'John Doe',
    },
  ];
  ngOnInit(): void {}
}
