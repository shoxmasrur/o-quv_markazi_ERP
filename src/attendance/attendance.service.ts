import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAttendanceDto } from "./dto/create-attendance.Dto";
import { AttendanceItemDto } from "./dto/attendanceItemDto";


@Injectable()
export class AttendanceService {
    constructor(
        private readonly prisma:PrismaService
    ){}

    async markAttendance(dto:CreateAttendanceDto){
        const lesson = await this.prisma.lesson.findUnique({where:{id:dto.lessonId}});
        if(!lesson){throw new NotFoundException('lesson not found')}
        const student = await this.prisma.student.findUnique({where:{id:dto.studentId}})
        if(!student){ throw new NotFoundException("student is not found")}
        const membership = await this.prisma.groupStudent.findFirst({
            where:{
                groupId:lesson.groupId,
                studentId:dto.studentId,
                leftAt:null
            }
        })
        if(!membership){throw new NotFoundException('student does not belongs to this group')};

        return this.prisma.attendance.upsert({
            where:{
                lessonId_studentId:{
                    studentId:dto.lessonId,
                    lessonId:dto.lessonId
                },

            },
            update:{
                status:dto.status,
                note:dto.note

            },
            create:{
            lessonId:dto.lessonId,
            studentId:dto.studentId,
            status:dto.status,
            note:dto.note
        }})
    }
    
    async markBulk(
        lessonId:number,
        items:AttendanceItemDto[]){
            const lesson = await this.prisma.lesson.findUnique({
                where:{id:lessonId}
            })
            if(!lesson){
                throw new NotFoundException("lesson fot found")
            };
            return this.prisma.$transaction(async (tx)=>{
                for(const item of items){
                    const memborship = await tx.groupStudent.findFirst({
                        where:{
                            groupId:lesson.groupId,
                            studentId:item.studentId,
                            leftAt:null
                        }
                    });
                    if(!memborship){
                        throw new BadRequestException(`Student ${item.studentId} does not belong to this group`)
                    }

                    await tx.attendance.upsert({
                        where:{lessonId_studentId:{
                            lessonId:lessonId,
                            studentId:item.studentId
                        }},
                        update:{
                            status:item.status,
                            note:item.note
                        },
                        create:{
                            lessonId,
                            studentId:item.studentId,
                            status:item.status,
                            note:item.note
                        }
                    })
                }
                return tx.attendance.findMany({
                    where:{lessonId}, include:{student:true}
                })
            })
        }




}