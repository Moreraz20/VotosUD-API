import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
export class CreateVotoDto {
  @IsNotEmpty()
  @IsString()
  readonly candidato: ObjectId;
  @IsNotEmpty()
  @IsString()
  readonly partido: ObjectId;
  @IsNotEmpty()
  @IsString()
  readonly created_at: string;
}
