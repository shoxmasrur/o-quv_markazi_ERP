import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "dotenv/config"
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = Number(process.env.PORT)

  // const config = new DocumentBuilder()
  //       .setTitle("Oquv-Markazi_ERP")
  //       .setVersion('1.0')
  //       .build()
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api/v1/docs', app, document)

  
  app.useGlobalPipes( new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true

  }))
  app.setGlobalPrefix('api/v1')

  await app.listen(PORT, ()=>console.log("server is running on", PORT));
}
bootstrap();
