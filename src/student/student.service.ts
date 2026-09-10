import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class StudentService {
    constructor(
        private readonly prisma:PrismaService
    ){}

    async findall(){
        return this.prisma.student.findMany({
            include:{parent:{include:{
                user:true
            }}}
        })
    }

    async findOne(id:number){
        return this.prisma.student.findUnique({where:{id},
        include:{parent:{include:{user:true}}}});
    }
}