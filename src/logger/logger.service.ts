import { Injectable } from '@nestjs/common';
import { MessageFormatterService } from 'src/message-formatter.service/message-formater.service';

@Injectable()
export class LoggerService {
    constructor(
        private readonly messageFormaterService: MessageFormatterService
    ) {}


   log(message: string): string {
    const sanitized = message.replace(/[\r\n]/g, ' ');
    const formattedMessage = this.messageFormaterService.format(sanitized);
    console.log(formattedMessage);
    return formattedMessage;
}

}
