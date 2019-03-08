import { MaxLength, IsNotEmpty } from "class-validator";

export class CriarfuncionarioDto {
    @MaxLength(200)
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    departamento: { id: number };
}
