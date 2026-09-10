import { Body, Controller, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AttendanceService } from "./attendance.service";
import { BulkAttendanceDto } from "./dto/BulkAttendanceDto";



@Controller('attendance')
export class AttendanceController {

    constructor(
        private readonly attendanceService:AttendanceService
    ){}
}


 