import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();



  editSelectTask(taskToEdit: Task){
    this.clickSender.emit(taskToEdit);
  }
  constructor() { }

  ngOnInit() {
  }

  filterByCompleteness: string = "incompleteTasks";

   onChange(optionFromMenu) {
     this.filterByCompleteness = optionFromMenu;
   }
   toggleDone(clickedTask: Task, setCompleteness: boolean)  {
     clickedTask.done = setCompleteness;
   }

}
