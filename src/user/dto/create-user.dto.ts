import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name!:string;


    @IsString()
    @IsNotEmpty()
    phone!:string;

    @IsString()
    @IsNotEmpty()
    passwordHash!:string

    @IsInt()
    @IsNotEmpty()
    roleId!:number
}