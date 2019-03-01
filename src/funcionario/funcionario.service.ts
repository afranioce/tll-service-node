import { Injectable } from '@nestjs/common';
import { Funcionario } from './funcionario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarfuncionarioDto } from './criar-funcionario.dto';
import { AtualizarFuncionarioDto } from './atualizar-funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) { }

  findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  findOne(id: number): Promise<Funcionario> {
    return this.funcionarioRepository.findOne(id);
  }

  create(criarFuncionarioDto: CriarfuncionarioDto): any {
    return this.funcionarioRepository.create(criarFuncionarioDto);
  }

  update(id: number, atualizarFuncionarioDto: AtualizarFuncionarioDto): any {
    return this.funcionarioRepository.update(id, atualizarFuncionarioDto);
  }

  delete(id: number): any {
    return this.funcionarioRepository.delete(id);
  }
}
