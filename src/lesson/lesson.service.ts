import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateLessonDto } from "./dto/create-lesson.Dto";


@Injectable()
export class LessonService {
    constructor(
        private readonly prisma:PrismaService
    ){}

    async create(@Body() dto: CreateLessonDto){
        const group = await this.prisma.group.findUnique({where:{id:dto.groupId}})
        if(!group){ throw new NotFoundException("group is not found")};
        const lesson = await this.prisma.lesson.create({
            data:{
                groupId:dto.groupId,
                date:dto.date,
                startTime:dto.startTime,
                endTime:dto.endTime,
                topic:dto.topic
            }
        })
    }

    async findAll(){
        return this.prisma.lesson.findMany({include:{group:{include:{teacher:true}}}, orderBy:{date:"asc"}})
    }
    
    
}