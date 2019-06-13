import { Component, Input } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'crap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  currentFocus: string = "Stay Focused Yo";
  currentDate = new Date();
  month: number = this.currentDate.getMonth() + 1;
  day: number = this.currentDate.getDate();
  year: number = this.currentDate.getFullYear();
  
  selectedTask: Task = null;

  masterTaskList: Task[] = [
    // new Task("Get a job you hobo", new Date(2019,5,12), 1),
    // new Task("Eat Lunch", new Date(2109,5,10), 3),
    // new Task("Take a nap", new Date(2019,5,10), 2),
    // new Task("Figure it all out", new Date(2020,0,1),1)
  ];
  
  selectTask(task){
    this.selectedTask = task;
  }
  finishedEditing() {
    this.selectedTask = null;
  }

  editTask(task) {
    this.selectedTask = task; 
  }
  addTask(newTask: Task){
    this.masterTaskList.push(newTask);
  }
}
export class TaskListComponent{
  @Input() childTaskList: Task[];
}


