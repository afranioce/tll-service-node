import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartamentoController } from './departamento/departamento.controller';
import { FuncionarioController } from './funcionario/funcionario.controller';
import { MovimentacaoController } from './movimentacao/movimentacao.controller';
import { DepartamentoService } from './departamento/departamento.service';
import { FuncionarioService } from './funcionario/funcionario.service';
import { MovimentacaoService } from './movimentacao/movimentacao.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, DepartamentoController, FuncionarioController, MovimentacaoController],
  providers: [AppService, DepartamentoService, FuncionarioService, MovimentacaoService],
})
export class AppModule {}
