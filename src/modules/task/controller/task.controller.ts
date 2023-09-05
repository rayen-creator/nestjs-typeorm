import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorator/public.decorator';

@Public()
@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto);
  }

  @Get()
  async findAll() {
    return await this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.taskService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.taskService.remove(id);
  }
}
