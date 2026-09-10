import { PartialType } from "@nestjs/mapped-types";
import { CreateTeacherDto } from "./create-teacherDto";


export class UpdateTeacherDto extends PartialType(CreateTeacherDto){}