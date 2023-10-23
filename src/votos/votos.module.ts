import { Module } from '@nestjs/common';
import { VotosController } from './votos.controller';
import { VotosService } from './votos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VotoSchema } from './voto.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'voto', schema: VotoSchema }])],
  controllers: [VotosController],
  providers: [VotosService],
})
export class VotosModule {}
