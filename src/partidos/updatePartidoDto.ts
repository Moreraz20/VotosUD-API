import { PartialType } from '@nestjs/mapped-types';
import { CreatePartidoDto } from './createPartidoDto';

export class UpdatePartidoDto extends PartialType(CreatePartidoDto) {}
