import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './Role/role.module';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { GroupStudentModule } from './groupStudent/groupStudent.module';
import { LessonModule } from './lesson/lesson.module';
import { AttendanceModule } from './attendance/attendance.module';
import { GradeModule } from './grade/grade.module';

@Module({
  imports: [PrismaModule, UserModule, RoleModule, StudentModule, GroupModule,
    GroupStudentModule, LessonModule, AttendanceModule, GradeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
