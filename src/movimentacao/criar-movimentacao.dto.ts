import { MaxLength, IsCurrency, IsOptional, IsNotEmpty, IsInt } from "class-validator";

export class CriarMovimentacaoDto {
  @IsCurrency()
  valor: number;

  @MaxLength(500)
  @IsOptional()
  descricao: string;

  @IsNotEmpty()
  funcionario: { id: number };
}
