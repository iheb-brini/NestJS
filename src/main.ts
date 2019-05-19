import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { progress } from './common/middleware/progress.middleware';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(progress);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
