import { IsEnum, IsIn, IsInt, isNotEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AttendanceStatus } from "generated/prisma/enums";


export class CreateAttendanceDto{

    @IsInt()
    @IsNotEmpty()
    lessonId!:number;



    @IsInt()
    @IsNotEmpty()
    studentId!:number;

    @IsEnum(AttendanceStatus)
    status?:AttendanceStatus;

    @IsOptional()
    @IsString()
    note?:string;

    
}