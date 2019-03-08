import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { AtualizarMovimentacaoDto } from './atualizar-movimentacao.dto';
import { CriarMovimentacaoDto } from './criar-movimentacao.dto';
import { MovimentacaoService } from './movimentacao.service';
import { validate } from "class-validator";
import { Response } from 'express';

@Controller('movimentacoes')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) { }
  @Get()
  getAll() {
    return this.movimentacaoService.findAll();
  }

  @Get(':id')
  async get(@Res() res: Response, @Param('id') id: number) {
    const movimentacao = await this.movimentacaoService.findOne(id);

    if (!movimentacao) {
      return res.status(HttpStatus.NOT_FOUND).send();
    }

    return res.status(HttpStatus.OK).send(movimentacao);
  }

  @Post()
  async create(@Res() res: Response, @Body() criarMovimentacaoDto: CriarMovimentacaoDto) {
    const errors = await validate(criarMovimentacaoDto);

    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).send(errors);
    }

    const movimentacao = await this.movimentacaoService.create(criarMovimentacaoDto);
    return res.status(HttpStatus.OK).send(movimentacao);
  }

  @Put(':id')
  async update(@Res() res: Response, @Param('id') id: number, @Body() atualizarMovimentacaoDto: AtualizarMovimentacaoDto) {
    const errors = await validate(atualizarMovimentacaoDto);

    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).send(errors);
    }

    const movimentacao = await this.movimentacaoService.update(id, atualizarMovimentacaoDto);
    return res.status(HttpStatus.OK).send(movimentacao);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    return this.movimentacaoService.delete(id);
  }
}
