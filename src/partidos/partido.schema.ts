import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type PartidoDocument = Partido & Document;

@Schema()
export class Partido {
  @Prop({ required: true })
  nombre: string;
  @Prop({ required: true })
  created_at: Date;
}

export const PartidoSchema = SchemaFactory.createForClass(Partido);
