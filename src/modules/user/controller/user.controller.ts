import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("user")
@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }
  

  @Post("/register")
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get("/getAllUsers")
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('/getById/:id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Patch('UpdateUser/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete('/deleteuser/:id')
  async remove(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
