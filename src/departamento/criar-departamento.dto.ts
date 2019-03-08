import { IsNotEmpty, MaxLength } from "class-validator";

export class CriarDepartamentoDto {
    @MaxLength(100)
    @IsNotEmpty()
    nome: string;
}
