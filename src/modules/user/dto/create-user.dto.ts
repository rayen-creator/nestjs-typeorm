import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Category } from "src/models/category.entity";
import { Task } from "src/models/task.entity";
import { User } from "src/models/user.entity";

export class CreateUserDto {

    @ApiProperty({type:'string'})
    @IsNotEmpty({message: 'Please enter a user name'})
    @IsString({message: 'username must be a string'})
    username: string;
    @ApiProperty({type:'string'})
    @IsNotEmpty({message: 'Please enter email'})
    @IsString({message: 'email must be a string'})
    email: string;
    @ApiProperty({type:'string'})
    @IsNotEmpty({message: 'Please enter password'})
    @IsString({message: 'Password must be a string'})
    password: string;
//     tasks:Task[]
//     category: Category
    createdAt: Date;
    createdBy: string;
 }
