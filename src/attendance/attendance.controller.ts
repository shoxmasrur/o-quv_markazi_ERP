import { Body, Controller, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AttendanceService } from "./attendance.service";
import { BulkAttendanceDto } from "./dto/BulkAttendanceDto";



@Controller('attendance')
export class AttendanceController {

    constructor(
        private readonly attendanceService:AttendanceService
    ){}

    @Post(':lessonId')
    markBulk(@Param('lessonId', ParseIntPipe) lessonId:number, @Body() dto:BulkAttendanceDto){
        return this.attendanceService.markBulk(lessonId, dto.attendance)
    }



    
}




 