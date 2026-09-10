import { PartialType } from "@nestjs/mapped-types";
import { CreateGradeDto } from "./create-grade";


export class UpdateGradeDto extends PartialType(CreateGradeDto){}