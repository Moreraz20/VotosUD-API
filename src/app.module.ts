import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VotosModule } from './votos/votos.module';
import { PartidosModule } from './partidos/partidos.module';
import { CandidatosModule } from './candidatos/candidatos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    VotosModule,
    PartidosModule,
    CandidatosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
