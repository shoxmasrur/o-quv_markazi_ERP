import { PartialType }  from '@nestjs/mapped-types'
import { CreateGroupDto } from './create-group.dto';

export class UPdateGroupDto extends PartialType(CreateGroupDto){}