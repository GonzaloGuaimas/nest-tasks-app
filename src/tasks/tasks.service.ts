import { Injectable } from '@nestjs/common';
import { TaskStatus, Task } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDTO } from './dto/task.dto';

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
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }
  getTaskByID(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  updateTask(id: string, updateFields: UpdateTaskDTO): Task {
    const task = this.getTaskByID(id);
    const newTask = Object.assign(task, updateFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
}
