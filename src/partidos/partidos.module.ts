import { Module } from '@nestjs/common';
import { PartidosController } from './partidos.controller';
import { PartidosService } from './partidos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PartidoSchema } from './partido.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'partido', schema: PartidoSchema }]),
  ],
  controllers: [PartidosController],
  providers: [PartidosService],
})
export class PartidosModule {}
