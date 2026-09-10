import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class GroupStudentService {
    constructor(
        private readonly prisma:PrismaService
    ){}

    async addStudent(groupId:number, studentId:number){
        const group = await this.prisma.group.findUnique({where:{id:groupId}})
        if(!group){ throw new NotFoundException('group not found')};
        const student = await this.prisma.student.findUnique({where:{id:studentId}});
        if(!student){throw new NotFoundException("student not found")};
        return this.prisma.groupStudent.create({
            data:{
                studentId,
                groupId
            }
        })
    }

    async remoteStudent(groupId:number, studentId:number){
        const membership = await this.prisma.groupStudent.findUnique({where:{groupId_studentId:{groupId, studentId}}});
        if(!membership){ throw new NotFoundException("Student is not in this group")}
        return this.prisma.groupStudent.update({
            where:{
                groupId_studentId:{
                    groupId,
                    studentId
                }
            },
            data:{
                leftAt: new Date()
            }
        })
    }
}