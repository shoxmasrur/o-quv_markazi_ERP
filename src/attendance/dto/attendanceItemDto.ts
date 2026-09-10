import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { AttendanceStatus } from "generated/prisma/enums";


export class AttendanceItemDto {

    @IsInt()
    studentId!:number;

    @IsEnum(AttendanceStatus)
    status!:AttendanceStatus

    @IsOptional()
    @IsString()
    note?:string;

}
