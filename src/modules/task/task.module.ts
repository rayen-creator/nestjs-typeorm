import { Module } from '@nestjs/common';
import { TaskService } from './services/task.service';
import { TaskController } from './controller/task.controller';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
