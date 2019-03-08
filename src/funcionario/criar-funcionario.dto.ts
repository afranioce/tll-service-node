import { MaxLength, IsNotEmpty, IsInt } from "class-validator";

export class CriarfuncionarioDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
   
    @MaxLength(200)
    @IsNotEmpty()
    nome: string;
}
