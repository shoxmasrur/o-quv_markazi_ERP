import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { GroupService } from "./group.service";
import { UPdateGroupDto } from "./dto/update-group.dto";



@Controller('group')
export class GroupController {
    constructor(
        private readonly groupService:GroupService
    ){}
    @Post()
    create(@Body() dto:CreateGroupDto){
        return this.groupService.create(dto)
    }


    @Get()
    findAll(){
        return this.groupService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.groupService.findOne(id)
    }

    @Patch(':id')
    update(@Param("id", ParseIntPipe) id:number,
            @Body() dto:UPdateGroupDto){
                return this.groupService.update(id, dto)
    }

    @Delete("id")
    delete(@Param('id', ParseIntPipe) id:number){
        return this.groupService.delete(id)
    }
}