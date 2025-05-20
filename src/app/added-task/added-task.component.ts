import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../task/task.service';

@Component({
  selector: 'app-added-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './added-task.component.html',
  styleUrl: './added-task.component.css'
})
export class AddedTaskComponent {
    @Input({required:true}) userId!:string;
    @Output() taskClose = new EventEmitter<void>();
    enteredTitle='';
    enteredSummary='';
    enteredDate='';
    private tasksService =inject(TasksService)
    closeAddTask(){
      this.taskClose.emit();
    }
    onSubmit(){
      this.tasksService.addTask(
        {
          title:this.enteredTitle,
          summary: this.enteredSummary,
          date: this.enteredDate
        }, this.userId
      );
      this.taskClose.emit();
    }
}
