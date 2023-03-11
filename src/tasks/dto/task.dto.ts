/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task.entity';
import { IsString, IsNotEmpty, MinLength, IsIn, IsOptional } from 'class-validator'
export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  description: string;
}

export class UpdateTaskDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
  status?: TaskStatus
}