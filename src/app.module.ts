import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyService } from './dummy/dummy.service';
import { MessageFormaterService } from './message-formater/message-formater.service';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DummyService, MessageFormaterService, LoggerService],
})
export class AppModule {}
