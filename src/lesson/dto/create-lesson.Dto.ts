import { IsDate, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateLessonDto {

    @IsInt()
    @IsNotEmpty()
    groupId!:number;

    @IsDateString()
    date!:string

    @IsDateString()
    startTime!:string

    @IsDateString()
    endTime!:string

    @IsOptional()
    @IsString()
    topic?:string
}