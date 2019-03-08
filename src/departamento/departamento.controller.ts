import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CriarDepartamentoDto } from './criar-departamento.dto';
import { AtualizarDepartamentoDto } from './atualizar-departamento.dto';
import { validate } from "class-validator";
import { Response } from 'express';

@Controller('departamentos')
export class DepartamentoController {
  constructor(
    private readonly departamentoService: DepartamentoService,
  ) { }

  @Get()
  getAll() {
    return this.departamentoService.findAll();
  }

  @Get(':id')
  async get(@Res() res: Response, @Param('id') id: number) {
    const departamento = await this.departamentoService.findOne(id);

    if (!departamento) {
      return res.status(HttpStatus.NOT_FOUND).send();
    }

    return res.status(HttpStatus.OK).send(departamento);
  }

  @Post()
  async create(@Res() res: Response, @Body() criarDepartamentoDto: CriarDepartamentoDto) {
    const errors = await validate(criarDepartamentoDto);

    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).send(errors);
    }

    const departamento = await this.departamentoService.create(criarDepartamentoDto);
    return res.status(HttpStatus.OK).send(departamento);
  }

  @Put(':id')
  async update(@Res() res: Response, @Param('id') id: number, @Body() atualizarDepartamentoDto: AtualizarDepartamentoDto) {
    const errors = await validate(atualizarDepartamentoDto);

    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).send(errors);
    }

    const departamento = await this.departamentoService.update(id, atualizarDepartamentoDto);
    return res.status(HttpStatus.OK).send(departamento);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    return this.departamentoService.delete(id);
  }
}
