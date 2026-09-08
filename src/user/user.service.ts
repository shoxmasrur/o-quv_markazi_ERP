import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class UserService {
    constructor(
        private readonly prisma:PrismaService
    ){}

    async create(dto:CreateUserDto){
        return await this.prisma.user.create({
            data:{
                name:dto.name,
                phone:dto.phone,
                passwordHash:dto.passwordHash,
                roleId:dto.roleId
            }
        });
    }
    

   async findAll(){
    return this.prisma.user.findMany({include:
        {role:true,teacher:true, parent:true
        
    }})
   }
}