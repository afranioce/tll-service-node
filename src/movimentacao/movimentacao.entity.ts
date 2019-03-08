import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Funcionario } from '../funcionario/funcionario.entity';

@Entity()
export class Movimentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal' })
  valor: number;

  @Column({ length: 500, nullable: true })
  descricao: string;

  @ManyToOne(type => Funcionario)
  @JoinColumn()
  funcionario: Funcionario;
}
