import { MaxLength, IsNotEmpty } from "class-validator";

export class AtualizarFuncionarioDto {
    @MaxLength(200)
    @IsNotEmpty()
    nome: string;
}
