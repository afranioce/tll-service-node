import { IsNotEmpty, MaxLength } from "class-validator";

export class AtualizarDepartamentoDto {
    @MaxLength(100)
    @IsNotEmpty()
    nome: string;
}
