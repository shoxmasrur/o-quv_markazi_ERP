import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from "class-validator";


export class CreateGradeDto{
    @IsInt()
    @IsNotEmpty()
    lessonId!:number;

    @IsInt()
    @IsNotEmpty()
    studentId!:number;

    @IsInt()
    @Min(0)
    @Max(100)
    score!:number;

    @IsOptional()
    @IsString()
    comment?:string;
}