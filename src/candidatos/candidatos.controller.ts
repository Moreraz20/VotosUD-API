import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { CreateCandidatoDto } from './createCandidatoDto';
import { UpdateCandidatoDto } from './updateCandidatoDto';

@Controller('candidatos')
export class CandidatosController {
  constructor(private readonly candidatosService: CandidatosService) {}

  @Post('create')
  async create(@Body() createCandidatoDto: CreateCandidatoDto) {
    return await this.candidatosService.createCandidato(createCandidatoDto);
  }

  @Get('get/all')
  async findAll() {
    return await this.candidatosService.findAll();
  }

  @Get('get/:id')
  async findVoto(@Param('id') id: string) {
    return this.candidatosService.findCandidato(id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.candidatosService.deleteCandidato(id);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCandidatoDto: UpdateCandidatoDto,
  ) {
    return this.candidatosService.updateCandidato(id, updateCandidatoDto);
  }
}
