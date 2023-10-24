import { IsNotEmpty, IsString } from 'class-validator';
export class CreatePartidoDto {
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;
  @IsNotEmpty()
  @IsString()
  readonly created_at: string;
}
