import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VotosService } from './votos.service';
import { CreateVotoDto } from './createVotoDto';
import { UpdateVotoDto } from './updateVotoDto';

@Controller('votos')
export class VotosController {
  constructor(private readonly votosService: VotosService) {}

  @Post('create')
  async create(@Body() createVotoDto: CreateVotoDto) {
    return await this.votosService.createVoto(createVotoDto);
  }

  @Get('get/all')
  async findAll() {
    return await this.votosService.findAll();
  }

  @Get('get/:id')
  async findVoto(@Param('id') id: string) {
    return this.votosService.findVoto(id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.votosService.deleteVoto(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateVotoDto: UpdateVotoDto) {
    return this.votosService.updateVoto(id, updateVotoDto);
  }
}
