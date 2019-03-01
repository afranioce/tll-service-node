
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Funcionario } from '../funcionario/funcionario.entity';

@Entity()
export class Movimentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column({ length: 500 })
  descricao: string;

  @ManyToOne(type => Funcionario)
  @JoinColumn()
  funcionario: Funcionario;
}
