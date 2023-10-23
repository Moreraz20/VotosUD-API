import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VotosModule } from './votos/votos.module';
import { PartidosModule } from './partidos/partidos.module';
import { CandidatosModule } from './candidatos/candidatos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Moreraz:GKq3eELML5XlEUzV@cluster0.n9xtwg5.mongodb.net/',
    ),
    VotosModule,
    PartidosModule,
    CandidatosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
