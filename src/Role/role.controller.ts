import { Body, Controller, Logger, Post } from "@nestjs/common";
import { RoleService } from "./role.service";
import { CreateRoleDto } from "./dto/crete-Role.dto";



@Controller('role')
export class RoleController {
    private readonly logger = new Logger(RoleController.name)
    constructor(
            private readonly roleService:RoleService
        ){}

    @Post()
    create(@Body() dto:CreateRoleDto){
        console.log("salom")
        return this.roleService.cretae(dto)
    }
}