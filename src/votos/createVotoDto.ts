import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
export class CreateVotoDto {
  @IsNotEmpty()
  @IsString()
  readonly candidato: string;
  @IsNotEmpty()
  @IsString()
  readonly partido: string;
  @IsNotEmpty()
  @IsString()
  readonly created_at: string;
}
