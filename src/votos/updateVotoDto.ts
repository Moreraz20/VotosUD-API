import { PartialType } from '@nestjs/mapped-types';
import { CreateVotoDto } from './createVotoDto';

export class UpdateVotoDto extends PartialType(CreateVotoDto) {}
