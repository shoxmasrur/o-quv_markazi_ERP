import { Module } from "@nestjs/common";
import { GroupStudentController } from "./groupStudent.controller";
import { GroupStudentService } from "./groupStudent.service";



@Module({
    controllers:[GroupStudentController],
    providers:[GroupStudentService],
    exports:[GroupStudentService]
})
export class GroupStudentModule{
    
}