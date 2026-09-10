import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";



export class CreateUserDto {
    @ApiProperty({example:"Ibodulleyev Shohruh", description:"to'liq ism kiritiladi"})
    @IsNotEmpty()
    @IsString()
    name!:string;

    @ApiProperty({example:"=998977777777"})
    @IsString()
    @IsNotEmpty()
    phone!:string;

    @ApiProperty({description:"birir kod kiritib yuborsangiz bo'ladi"})
    @IsString()
    @IsNotEmpty()
    passwordHash!:string

    @IsInt()
    @IsNotEmpty()
    roleId!:number
}