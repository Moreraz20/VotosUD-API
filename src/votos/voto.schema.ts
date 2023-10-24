import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import mongoose, { Document } from 'mongoose';
export type VotoDocument = Voto & Document;

@Schema()
export class Voto {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'candidato',
    required: true,
  })
  candidato: ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'partido',
    required: true,
  })
  partido: ObjectId;
  @Prop({ required: true })
  created_at: Date;
}

export const VotoSchema = SchemaFactory.createForClass(Voto);
