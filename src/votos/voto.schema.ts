import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
export type VotoDocument = Voto & Document;

@Schema()
export class Voto {
  @Prop({ required: true })
  candidato: ObjectId;
  @Prop({ required: true })
  partido: ObjectId;
  @Prop({ required: true })
  created_at: Date;
}

export const VotoSchema = SchemaFactory.createForClass(Voto);
