import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateRoleDto } from "./dto/crete-Role.dto";



@Injectable()
export class RoleService {
    constructor(private readonly prisma:PrismaService){}

    async cretae(dto:CreateRoleDto){
        return this.prisma.role.create({
            data:{name:dto.name}})
    }

    async findAll(){
        return this.prisma.role.findMany()
    }
}