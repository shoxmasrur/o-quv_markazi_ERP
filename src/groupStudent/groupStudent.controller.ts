import { Body, Controller, Param, Post } from "@nestjs/common";
import { GroupStudentService } from "./groupStudent.service";
import { CreateGroupDto } from "src/group/dto/create-group.dto";
import { CreateGroupStudentDto } from "./dto/create-GroupStudent.dto";



@Controller('GroupStudent')
export class GroupStudentController {
    constructor(
        private readonly groupStudentService:GroupStudentService
    ){}

    @Post()
    async create(@Body() dto:CreateGroupStudentDto){
        return this.groupStudentService.addStudent(dto.studentId, dto.groupId)
    }


}