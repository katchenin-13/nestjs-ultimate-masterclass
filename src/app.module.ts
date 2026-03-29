import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyService } from './dummy/dummy.service';
import { MessageFormatterService } from './message-formatter.service/message-formater.service';
import { LoggerService } from './logger/logger.service';
import { TasksModule } from './task/tasks.module';
import { appConfig } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig], isGlobal: true }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, DummyService, MessageFormatterService, LoggerService],
})
export class AppModule {}
