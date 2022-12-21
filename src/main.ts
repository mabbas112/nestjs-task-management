import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as conf from 'config'
import { Logger } from '@nestjs/common';

async function bootstrap() {


  const configServer = conf.get('server')
  const logger = new Logger('bootstrap');
  //If post is not defined we will fallback to configuration file
  const port = process.env.PORT || configServer.port;
  logger.log(`listening on port ${port}`)
  const app = await NestFactory.create(AppModule); 
  await app.listen(port);
}
bootstrap();
