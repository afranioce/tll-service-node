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

  findAll(): Promise<Departamento[]> {
    return this.departamentoRepository.find();
  }

  findOne(id: number): Promise<Departamento> {
    return this.departamentoRepository.findOne(id);
  }

  create(criarDepartamentoDto: CriarDepartamentoDto) {
    return this.departamentoRepository.save(criarDepartamentoDto);
  }

  update(id: number, atualizarDepartamentoDto: AtualizarDepartamentoDto) {
    return this.departamentoRepository.update(id, atualizarDepartamentoDto);
  }

  delete(id: number) {
    return this.departamentoRepository.delete(id);
  }
}
