import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators }             from '@angular/forms';
import { SrpIcon }                                        from 'src/app/components/srp-icon';
import { TaskListItem }                                   from 'src/app/components/task-list/task-list.component';

@Component({
  selector:    'srp-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls:   ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {
  @Input() task: TaskListItem;
  @Input() icon: SrpIcon;
  @Input() isEdit: boolean;
  @Output() taskAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskChanged: EventEmitter<TaskListItem> = new EventEmitter<TaskListItem>();

  public taskForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      value: [this.task.value, Validators.required],
    });
  }

  public submit(): void {
    // No empty submit
    if (this.taskForm.invalid) {
      return;
    }

    const taskValue: string = this.taskForm.get('value').value;

    // add
    if (this.task.id === null) {
      this.taskAdded.emit(taskValue);
      this.taskForm.reset();
    } else {
      // change
      this.taskChanged.emit({
        id:    this.task.id,
        value: taskValue
      });
    }
  }
}
