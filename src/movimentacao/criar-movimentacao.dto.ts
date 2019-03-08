import {IsInt, MaxLength, IsCurrency, IsNotEmpty, IsOptional} from "class-validator";

export class CriarMovimentacaoDto {
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsCurrency()
    valor: number;

    @MaxLength(500)
    @IsOptional()
    descricao: string;
}
