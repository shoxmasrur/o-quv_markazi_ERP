import { IsInt, IsNotEmpty } from "class-validator";


export class CreateTeacherDto {

    @IsInt()
    @IsNotEmpty()
    userId!:number
}