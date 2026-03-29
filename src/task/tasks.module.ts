import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}