import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //swagger implimentation
  const config = new DocumentBuilder()
    .setTitle('Online Task Management System')
    .setDescription('Online Task Management System API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  //dto implimentation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
