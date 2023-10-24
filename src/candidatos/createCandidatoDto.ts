import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
export class CreateCandidatoDto {
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;
  @IsNotEmpty()
  @IsString()
  readonly partido: ObjectId;
  @IsNotEmpty()
  @IsString()
  readonly cedula: string;
  @IsNotEmpty()
  @IsString()
  readonly created_at: string;
}
