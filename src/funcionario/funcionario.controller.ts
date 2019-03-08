import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CriarfuncionarioDto } from './criar-funcionario.dto';
import { AtualizarFuncionarioDto } from './atualizar-funcionario.dto';
import { validate } from "class-validator";
import { Response } from 'express';

@Controller('funcionarios')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) { }

  @Get()
  getAll() {
    return this.funcionarioService.findAll();
  }

  @Get(':funcionarioId/movimentacoes')
  encontrarMovimentacoes(@Param('funcionarioId') funcionarioId: number) {
    return this.funcionarioService.encontrarMovimentacoes(funcionarioId);
  }

  @Get(':id')
  async get(@Res() res: Response, @Param('id') id: number) {
    const funcionario = await this.funcionarioService.findOne(id);

    if (!funcionario) {
      return res.status(HttpStatus.NOT_FOUND).send();
    }

    return res.status(HttpStatus.OK).send(funcionario);
  }

  @Post()
  async create(@Res() res: Response, @Body() criarFuncionarioDto: CriarfuncionarioDto) {
    const errors = await validate(criarFuncionarioDto);

    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).send(errors);
    }

    const funcionario = await this.funcionarioService.create(criarFuncionarioDto);
    return res.status(HttpStatus.OK).send(funcionario);
  }

  @Put(':id')
  async update(@Res() res: Response, @Param('id') id: number, @Body() atualizarFuncionarioDto: AtualizarFuncionarioDto) {
    const errors = await validate(atualizarFuncionarioDto);

    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).send(errors);
    }

    const funcionario = await this.funcionarioService.update(id, atualizarFuncionarioDto);
    return res.status(HttpStatus.OK).send(funcionario);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    return this.funcionarioService.delete(id);
  }
}
