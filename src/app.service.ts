import { Injectable } from '@nestjs/common';
import { DummyService } from './dummy/dummy.service';
import { MessageFormaterService } from './message-formater/message-formater.service';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(
    private readonly dummyService: DummyService,
    private readonly logger: LoggerService
  ) {}
  getHello(): string {
    return this.logger.log(`Hello World! ${this.logger.log(this.dummyService.work())}`);
  }

  
}
