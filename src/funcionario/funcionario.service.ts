import { Injectable } from '@nestjs/common';
import { Funcionario } from './funcionario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarfuncionarioDto } from './criar-funcionario.dto';
import { AtualizarFuncionarioDto } from './atualizar-funcionario.dto';
import { Movimentacao } from 'src/movimentacao/movimentacao.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
    @InjectRepository(Movimentacao)
    private readonly movimentacaoRepository: Repository<Movimentacao>) { }

  findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  encontrarMovimentacoes(funcionarioId: number): Promise<Movimentacao[]> {
    return this.movimentacaoRepository.find({
      where: {
        funcionario: { id: funcionarioId }
      }
    });
  }

  findOne(id: number): Promise<Funcionario> {
    return this.funcionarioRepository.findOne(id);
  }

  create(criarFuncionarioDto: CriarfuncionarioDto): any {
    return this.funcionarioRepository.save(criarFuncionarioDto);
  }

  update(id: number, atualizarFuncionarioDto: AtualizarFuncionarioDto): any {
    return this.funcionarioRepository.update(id, atualizarFuncionarioDto);
  }

  delete(id: number): any {
    return this.funcionarioRepository.delete(id);
  }
}
