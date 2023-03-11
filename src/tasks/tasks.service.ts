import { Injectable } from '@nestjs/common';
import { TaskStatus, Task } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'titulo',
      description: 'Some Task',
      status: TaskStatus.OPEN,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const newTask: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(newTask);
    return newTask;
  }
  deleteTask() {}
  updateTask() {}
}
