import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/database.config';
import { TasksModule } from './task/tasks.module';
import { typeOrmConfig } from './config/typeorm.config';
import { MessageFormatterService } from './message-formatter.service/message-formater.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => typeOrmConfig(),
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, DummyService, MessageFormatterService, LoggerService],
})
export class AppModule {}