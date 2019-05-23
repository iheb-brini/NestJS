import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { progress } from './common/middleware/progress.middleware';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/exceptions/all-exceptions.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(progress);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
