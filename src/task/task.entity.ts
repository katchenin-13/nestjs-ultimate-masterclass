import { ITask, TaskStatus } from './task.model';

export class Task implements ITask {
  id: string;

  title: string;

  description: string;

  status: TaskStatus;
}
