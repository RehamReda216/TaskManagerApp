import { Injectable } from "@angular/core";
import { NewTaskData } from "./task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    tasks=[
        {
          id:'t1',
          userId:'u1',
          title:'Display the quote 😀',
          summary: 'Procastination is like a credit card: it\'s alot of fun until you get the bill.',
          dueDate: '2024-3-22'
        },
        {
          id:'t2',
          userId:'u1',
          title:'Host Dr Emad Rashad Again 🤭',
          summary: 'Talk about his experience with remarkable patients.',
          dueDate: '2024-3-22'
        },
        {
          id:'t3',
          userId:'u2',
          title:'Talk about name of Allah: The Compeller الجبار 🤲🏻',
          summary: 'Jabr meaning is ‘to repair the broken, fix and reform something.’ When something is incomplete and you complete it.',
          dueDate: '2024-3-22'
        },
        {
          id:'t4',
          userId:'u2',
          title:'Contemplate Surah Al-Muzzammil المزمل',
          summary: 'Make the listener feel like he was in the room with the prophet.',
          dueDate: '2024-3-22'
        },
        {
          id:'t5',
          userId:'u3',
          title:'Ask the guest 🧐',
          summary: 'بصراحة كيف حالك؟',
          dueDate: '2024-3-22'
        },
        {
          id:'t6',
          userId:'u3',
          title:'Make the guest remember his traumas 😢',
          summary: 'The guest should cry',
          dueDate: '2024-3-22'
        },
        {
          id:'t7',
          userId:'u4',
          title:'Post awesome tutorial as usual 😎',
          summary: 'Include this tutorial with honest valuable advices for students and motivate them. ',
          dueDate: '2024-11-5'
        },
        {
          id:'t8',
          userId:'u5',
          title:'Explain new JS concept 📝',
          summary: 'Provide the explanation with seamless expressive diagrams.',
          dueDate: '2024-3-22'
        }
      ];
    constructor(){
      const tasks = localStorage.getItem('tasks');
      if(tasks){
        this.tasks= JSON.parse(tasks);
      }
    }
    getUserTasks(userId:string){
        return this.tasks.filter((task) => task.userId === userId );
    }
    addTask(newTask:NewTaskData, userId:string){
        this.tasks.push(
            {
              id: new Date().getTime().toString(),
              userId: userId,
              title: newTask.title,
              summary: newTask.summary,
              dueDate:newTask.date
            }
          );
          this.saveTasks();
    }

    removeTask(id:string){
        this.tasks= this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }
    private saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } 
}