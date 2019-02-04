import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .with('AppModule')
      .forRoutes(CatsController);
  }
}
