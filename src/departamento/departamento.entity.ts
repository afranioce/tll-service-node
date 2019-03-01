
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Funcionario } from '../funcionario/funcionario.entity';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @OneToMany(type => Funcionario, funcionario => funcionario.departamento)
  funcionarios: Funcionario[];
}
