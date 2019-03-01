
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Departamento } from '../departamento/departamento.entity';
import { Movimentacao } from '../movimentacao/movimentacao.entity';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  nome: string;

  @ManyToOne(type => Departamento)
  @JoinColumn()
  departamento: Departamento;

  @OneToMany(type => Movimentacao, movimentacao => movimentacao.funcionario)
  movimentacoes: Movimentacao[];
}
