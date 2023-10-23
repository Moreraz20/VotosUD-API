import { Module } from '@nestjs/common';
import { CandidatosController } from './candidatos.controller';
import { CandidatosService } from './candidatos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatoSchema } from './candidato.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'candidato', schema: CandidatoSchema }]),
  ],
  controllers: [CandidatosController],
  providers: [CandidatosService],
})
export class CandidatosModule {}
