import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CriarDepartamentoDto } from './criar-departamento.dto';
import { AtualizarDepartamentoDto } from './atualizar-departamento.dto';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) { }
  @Get()
  async getAll() {
    return this.departamentoService.findAll();
  }

  @Get(':id')
  async get(@Param('id') id) {
    return this.departamentoService.findOne(id);
  }

  @Post()
  async create(@Body() criarDepartamentoDto: CriarDepartamentoDto) {
    return this.departamentoService.create(criarDepartamentoDto);
  }

  @Put(':id')
  update(@Param('id') id, @Body() atualizarDepartamentoDto: AtualizarDepartamentoDto) {
    return this.departamentoService.update(id, atualizarDepartamentoDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    return this.departamentoService.delete(id);
  }
}
