import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDTO } from './dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDTO) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }
}
