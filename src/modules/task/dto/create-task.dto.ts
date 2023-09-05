import { ApiProperty } from "@nestjs/swagger"
import {  IsNotEmpty, IsString } from "class-validator"

export class CreateTaskDto {

    @ApiProperty({type:'string'})
    @IsNotEmpty()
    @IsString()
    title: string
    @ApiProperty({type:'string'})
    @IsNotEmpty()
    @IsString()
    description: string
    @ApiProperty({type:'string',format: "date-time",})
    @IsNotEmpty()
    dueDate: Date
    @ApiProperty({type:'string'})
    @IsNotEmpty()
    @IsString()
    priority: string
}
