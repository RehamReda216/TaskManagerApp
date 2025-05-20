import { Component, Input} from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { AddedTaskComponent } from '../added-task/added-task.component';
import { TasksService } from '../task/task.service';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,AddedTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required:true}) userId!:string;
    @Input({required:true}) name!:string | undefined;
    istaskAdded= false;

    constructor(private tasksService:TasksService){}
    
    get selectedUserTasks(){
      return this.tasksService.getUserTasks(this.userId)
    }
    AddTask(){
        this.istaskAdded=true;
    }
    closeNewTask(){
      this.istaskAdded=false;
    }
    onAddTask(taskData:NewTaskData){
      this.istaskAdded = false;
    }
}
