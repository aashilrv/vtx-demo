import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class TaskListItem {
  id: string;
  value: string;
}

@Component({
  selector:    'srp-task-list',
  templateUrl: './task-list.component.html',
  styleUrls:   ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() title: string;
  @Input() tasks: TaskListItem[];
  @Output() taskAdded: EventEmitter<TaskListItem> = new EventEmitter<TaskListItem>();
  @Output() taskChanged: EventEmitter<TaskListItem> = new EventEmitter<TaskListItem>();

  public hint: string = 'Add another task, hit enter';
  public newTask: TaskListItem;


  constructor() {
  }

  ngOnInit(): void {
    this.newTask = this.buildEmptyTask();
  }

  public add(value: string) {
    this.taskAdded.emit({
      id: null,
      value
    });
  }

  public change(task: TaskListItem) {
    this.taskChanged.emit(task);
  }

  private buildEmptyTask(): TaskListItem {
    return { id: null, value: '' };
  }
}
