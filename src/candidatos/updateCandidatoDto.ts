import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoDto } from './createCandidatoDto';

export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {}
