import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
export type CanditoDocument = Candidato & Document;

@Schema()
export class Candidato {
  @Prop({ required: true })
  nombre: string;
  @Prop({ required: true })
  partido: string;
  @Prop({ required: true })
  cedula: string;
  @Prop({ required: true })
  created_at: Date;
}

export const CandidatoSchema = SchemaFactory.createForClass(Candidato);
