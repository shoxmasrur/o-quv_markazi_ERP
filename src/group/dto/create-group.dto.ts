import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";



export class CreateGroupDto{

    @IsString()
    @IsNotEmpty()
    name!:string;

    @IsInt()
    @IsNotEmpty()
    teacherId!:number

    @IsOptional()
    @IsDate()
    startDate!:Date

    @IsOptional()
    @IsDate()
    endDate!:Date
}