import { MaxLength, IsNotEmpty, IsInt } from "class-validator";

export class AtualizarFuncionarioDto {
  @MaxLength(200)
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  departamento: { id: number };
}
