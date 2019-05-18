import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { progress } from './common/middleware/progress.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(progress);
  await app.listen(3000);
}
bootstrap();
