import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMember {
    /**
     * Para se fazer validações no NestJS, pode ser baixado por exemplo, o class-validator e o class-transformer (não
     * é obrigatório utilizá-lo, porém para o funcionamento do class-validator, é preciso baixa-lo obrigatoriamente)
     * 
     * Apesar de o NestJS ter a recomendação de como fgazer tudo, você pode, sim, fazer tudo da forma que você deseja
    */

    // Para utlizar os validators, também são utilizados decorators
    // Dentro de cada validação eu consigo editar a messagem que vai com ela, caso eu não queira a padrão
    @IsNotEmpty({
        message: "The name is required."
    })
    @Length(3, 100)
    public name: string;
    @IsNotEmpty()
    public function: string;
}   