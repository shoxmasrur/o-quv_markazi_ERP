import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { StudentService } from "./student.service";


@Controller("student")
export class StudentController{
    constructor(
        private readonly studentService: StudentService
    ){}

    @Get()
    findAll(){
        return this.studentService.findall()
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id:number){
        return this.studentService.findOne(id)
    }
    
}