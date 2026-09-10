import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { GradeService } from "./grade.service";
import { CreateGradeDto } from "./dto/create-grade";


@Controller("grade")
export class GradeController{
    constructor(
        private readonly gradeService:GradeService
    ){}

    @Post()
    create(@Body() dto:CreateGradeDto){
        return this.gradeService.create(dto)
    }

    @Get('lesson/:lessonId')
    findBylesson(@Param('lessonId', ParseIntPipe) lessonId:number){
        return this.gradeService.findByLesson(lessonId)
    }
}