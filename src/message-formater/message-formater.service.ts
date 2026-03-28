import { Injectable } from '@nestjs/common';

export class MessageFormaterService {
     formatMessage(message: string): string {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] ${message} `;
    }
}
