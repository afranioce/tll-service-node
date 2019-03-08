import { IsCurrency, MaxLength, IsOptional } from "class-validator";

export class AtualizarMovimentacaoDto {
  @IsCurrency()
  valor: number;

  @MaxLength(500)
  @IsOptional()
  descricao: string;
}
