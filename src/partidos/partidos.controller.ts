import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PartidosService } from './partidos.service';
import { CreatePartidoDto } from './createPartidoDto';
import { UpdatePartidoDto } from './updatePartidoDto';

@Controller('partidos')
export class PartidosController {
  constructor(private readonly partidosService: PartidosService) {}

  @Post('create')
  async create(@Body() createPartidoDto: CreatePartidoDto) {
    return await this.partidosService.createPartido(createPartidoDto);
  }

  @Get('get/all')
  async findAll() {
    return await this.partidosService.findAll();
  }

  @Get('get/:id')
  async findVoto(@Param('id') id: string) {
    return this.partidosService.findPartido(id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.partidosService.deletePartido(id);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePartidoDto: UpdatePartidoDto,
  ) {
    return this.partidosService.updatePartido(id, updatePartidoDto);
  }
}
