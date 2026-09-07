import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "dotenv/config"
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = Number(process.env.PORT)
  app.useGlobalPipes( new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true

  }))
  app.setGlobalPrefix('api/v1')
  
  await app.listen(PORT, ()=>console.log("server is running on", PORT));
}
bootstrap();
