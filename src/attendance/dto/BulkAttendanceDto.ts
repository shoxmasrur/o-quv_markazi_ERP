import { IsArray } from "class-validator";
import { AttendanceItemDto } from "./attendanceItemDto";


export class BulkAttendanceDto {

    @IsArray()
    attendance!: AttendanceItemDto[]

    
}