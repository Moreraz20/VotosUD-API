import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import mongoose, { Document } from 'mongoose';
export type CanditoDocument = Candidato & Document;

@Schema()
export class Candidato {
  @Prop({ required: true })
  nombre: string;
  @Prop({ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'partido',
    required: true,
  })
  partido: ObjectId;
  @Prop({ required: true })
  cedula: string;
  @Prop({ required: true })
  created_at: Date;
}

export const CandidatoSchema = SchemaFactory.createForClass(Candidato);
