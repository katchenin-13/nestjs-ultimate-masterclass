import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig = registerAs('database', ():TypeOrmModuleOptions => ({
 type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5434'),
  username: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  //synchronize: Boolean(process.env.DB_SYNC ?? false),
}));
