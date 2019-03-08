import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoModule } from './departamento/departamento.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DepartamentoModule, FuncionarioModule, MovimentacaoModule],
})
export class AppModule {}
