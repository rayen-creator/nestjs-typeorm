import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateTaskDto {

    @ApiProperty({type:'string'})
    @IsNotEmpty()
    @IsString()
    title: string
    @ApiProperty({type:'string'})
    @IsNotEmpty()
    @IsString()
    description: string
    @ApiProperty({type:'string'})
    @IsNotEmpty()
    @IsDate()
    dueDate: Date
    @ApiProperty({type:'string'})
    @IsNotEmpty()
    @IsString()
    priority: string
}
