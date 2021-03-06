import { Module, NestModule, MiddlewareConsumer, RequestMethod, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { APP_PIPE } from '@nestjs/core';
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.POST })
      .forRoutes(CatsController);

  }

}
