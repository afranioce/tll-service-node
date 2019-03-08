import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { Funcionario } from './funcionario.entity';
import { Movimentacao } from 'src/movimentacao/movimentacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario, Movimentacao])],
  providers: [FuncionarioService],
  controllers: [FuncionarioController],
})
export class FuncionarioModule {}