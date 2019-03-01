import { Injectable } from '@nestjs/common';
import { Departamento } from './departamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarDepartamentoDto } from './criar-departamento.dto';
import { AtualizarDepartamentoDto } from './atualizar-departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) { }

  async findAll(): Promise<Departamento[]> {
    return await this.departamentoRepository.find();
  }

  async findOne(id: number): Promise<Departamento> {
    return await this.departamentoRepository.findOne(id);
  }

  async create(criarDepartamentoDto: CriarDepartamentoDto) {
    return await this.departamentoRepository.insert(criarDepartamentoDto);
  }

  async update(id: number, atualizarDepartamentoDto: AtualizarDepartamentoDto) {
    return await this.departamentoRepository.update(id, atualizarDepartamentoDto);
  }

  async delete(id: number) {
    return await this.departamentoRepository.delete(id);
  }
}
