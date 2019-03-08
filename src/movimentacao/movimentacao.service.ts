import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimentacao } from './movimentacao.entity';
import { CriarMovimentacaoDto } from './criar-movimentacao.dto';
import { AtualizarMovimentacaoDto } from './atualizar-movimentacao.dto';

@Injectable()
export class MovimentacaoService {
  constructor(
    @InjectRepository(Movimentacao)
    private readonly movimentacaoRepository: Repository<Movimentacao>,
  ) { }

  findAll(): Promise<Movimentacao[]> {
    return this.movimentacaoRepository.find();
  }

  findOne(id: number): Promise<Movimentacao> {
    return this.movimentacaoRepository.findOne(id);
  }

  create(criarMovimentacaoDto: CriarMovimentacaoDto) {
    return this.movimentacaoRepository.save(criarMovimentacaoDto);
  }

  update(id: number, atualizarMovimentacaoDto: AtualizarMovimentacaoDto) {
    return this.movimentacaoRepository.update(id, atualizarMovimentacaoDto);
  }

  delete(id: number) {
    return this.movimentacaoRepository.delete(id);
  }
}
