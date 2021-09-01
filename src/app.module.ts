import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudController } from './crud/crud.controller';
import { ParametrosController } from './parametros/parametros.controller';

@Module({
  imports: [],
  controllers: [AppController, CrudController, ParametrosController],
  providers: [AppService],
})
export class AppModule {}
