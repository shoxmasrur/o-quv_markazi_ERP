import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UPdateGroupDto } from "./dto/update-group.dto";


@Injectable()
export class GroupService{
    constructor(
        private readonly prisma:PrismaService
    ){}

    async create(dto:CreateGroupDto){
        const teacher = await this.prisma.teacher.findUnique({where:{id:dto.teacherId}});
        if(!teacher){
            throw new NotFoundException("teacher not found")
        }
        return this.prisma.group.create({
            data:{
                name:dto.name,
                teacherId: dto.teacherId,
                startDate:dto.startDate,
                endDate:dto.endDate
            }
        })
    }
    async findAll(){
        return this.prisma.group.findMany({include:{teacher:{include:{user:true}},students:true}})
    }

    async findOne(id:number){
        const group = await this.prisma.group.findUnique({
            where:{id}, include:{teacher:{include:{user:true}},
        students:true}
        })
        if(!group){
            throw new NotFoundException("group is not found")
        }
        return group
    }

    async update(id:number, dto:UPdateGroupDto){
        const teacher = await this.prisma.teacher.findUnique({where:{id:dto.teacherId}});
        if(!teacher){
            throw new NotFoundException("teacher not found")
        }
        const updatedGroup = await this.prisma.group.update({where:{id:id},
        data:{
            name:dto.name,
            teacherId:dto.teacherId,
            startDate:dto.startDate,
            endDate:dto.endDate
        }}); 
    }

    async delete(id:number){
        await this.findOne(id);
        await this.prisma.group.delete({where:{id}});

    }
}