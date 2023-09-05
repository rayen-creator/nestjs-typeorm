import { Task } from './../../../models/task.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save({
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
      createdAt: createUserDto.createdAt,
      createdBy: createUserDto.createdBy,
    })
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy({ id: id })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    return await this.userRepository.update({ id: id }, {
      username: updateUserDto.username,
      email: updateUserDto.email,
      password: updateUserDto.password,
      lastChangedAt: updateUserDto.lastChangedAt,
      lastChangedBy: updateUserDto.lastChangedBy
    })
  }

  async delete(id: string) {
    return await this.userRepository.delete({ id: id })
  }
}
