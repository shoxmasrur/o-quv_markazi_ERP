import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGradeDto } from "./dto/create-grade";


@Injectable()
export class GradeService {

    constructor(
        private readonly prisma:PrismaService
    ){}

    async create(dto:CreateGradeDto){
        const lesson = await this.prisma.lesson.findUnique({
            where:{id:dto.lessonId}
        });
        if(!lesson){throw new NotFoundException("lesson not found")}
        const student = await this.prisma.student.findUnique({
            where:{id:dto.studentId}
        });
        if(!student){throw new NotFoundException("student not found")}

        const memborship = await this.prisma.groupStudent.findFirst({
            where:{groupId:lesson.groupId,
                   studentId:dto.studentId,
                   leftAt:null
            } 
        })
        if(!memborship){throw new NotFoundException("student does not belongs to this group")};

        return this.prisma.grade.upsert({
            where:{lessonId_studentId:{
                lessonId:dto.lessonId,
                studentId:dto.studentId
            }},
            update:{
                score:dto.score,
                comment:dto.comment
            },
            create:{
                lessonId:dto.lessonId,
                studentId:dto.studentId,
                score:dto.score,
                comment:dto.comment
            }
        })
    }

    async findByLesson(lessonId:number){
        const lesson = await this.prisma.lesson.findUnique({
            where:{id:lessonId}
        });
        if(!lesson){ throw new NotFoundException("lesson not found")}
        const grades = await this.prisma.grade.findMany({
            where:{lessonId}, include:{student:true}, orderBy:{student:{fullName:"desc"}}
        })
        return grades;
    }
}