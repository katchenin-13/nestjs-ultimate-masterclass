import { ConfigType as NestConfigType } from '@nestjs/config';
import { appConfig } from './app.config';
import * as Joi from 'joi';

export interface ConfigType {
  app: NestConfigType<typeof appConfig>;
}


export const appConfigSchema = Joi.object({
    APP_MESSAGE_PREFIX: Joi.string().default('Hello')
}) 