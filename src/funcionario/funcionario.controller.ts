import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CriarfuncionarioDto } from './criar-funcionario.dto';
import { AtualizarFuncionarioDto } from './atualizar-funcionario.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) { }
  @Get()
  async getAll() {
    return this.funcionarioService.findAll();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.funcionarioService.findOne(id);
  }

  @Post()
  async create(@Body() criarFuncionarioDto: CriarfuncionarioDto) {
    return this.funcionarioService.create(criarFuncionarioDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() atualizarFuncionarioDto: AtualizarFuncionarioDto) {
    return this.funcionarioService.update(id, atualizarFuncionarioDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    return this.funcionarioService.delete(id);
  }
}
