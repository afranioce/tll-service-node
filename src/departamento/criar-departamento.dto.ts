import { IsNotEmpty, MaxLength, IsInt } from "class-validator";

export class CriarDepartamentoDto {
    @IsNotEmpty()
    @IsInt()
    id: number;

    @MaxLength(100)
    @IsNotEmpty()
    nome: string;
}
