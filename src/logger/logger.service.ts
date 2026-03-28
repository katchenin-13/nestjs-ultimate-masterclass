import { Injectable } from '@nestjs/common';
import { MessageFormaterService } from 'src/message-formater/message-formater.service';

@Injectable()
export class LoggerService {
    constructor(
        private readonly messageFormaterService: MessageFormaterService
    ) {}
    log(message: string): string {
        const formattedMessage = this.messageFormaterService.formatMessage(message);
        console.log(formattedMessage);
        return formattedMessage;
   }
}
