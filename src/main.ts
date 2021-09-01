import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT =parseInt(process.env.PORT,10 ) || 3000;
  Logger.log(`Esta corriendo en el puerto : ${PORT}`)
  Logger.debug(`Esta corriendo en el puerto : ${PORT}`)
  Logger.error(`Esta corriendo en el puerto : ${PORT}`)
  Logger.warn(`Esta corriendo en el puerto : ${PORT}`)


  await app.listen(3000);
}
bootstrap();
