import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from 'src/models/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) { }

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save({
      title: createTaskDto.title,
      description: createTaskDto.description,
      dueDate: createTaskDto.dueDate,
      priority: createTaskDto.priority
    });
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: string) {
    return await this.taskRepository.findOneBy({ id: id })
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepository.update({ id: id }, {
      title: updateTaskDto.title,
      description: updateTaskDto.description,
      dueDate: updateTaskDto.dueDate,
      priority: updateTaskDto.priority,
      lastChangedAt: updateTaskDto.lastChangedAt,
      lastChangedBy: updateTaskDto.lastChangedBy
    });
  }

  async remove(id: string) {
    return await this.taskRepository.delete({ id: id })
  }
}
