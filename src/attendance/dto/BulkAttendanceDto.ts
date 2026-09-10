import { AttendanceItemDto } from "./attendanceItemDto";


export class BulkAttendanceDto {
    constructor(
       private readonly attendance: AttendanceItemDto[]

    ){}
}