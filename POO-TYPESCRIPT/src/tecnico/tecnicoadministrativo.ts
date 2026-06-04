import { Pessoa } from "../pessoa/pessoa";
import { Endereco } from "../endereco/endereco";

abstract class TecnicoAdministrativo extends Pessoa {

    // CONSTRUTOR
    constructor(
        nome: string, sobrenome: string,
        sexo: string, CPF: string, idade: number,
        brasileiro: boolean, enderecos: Endereco[]
    ) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula(); 
    }

    // MÉTODOS DE INSTÂNCIA 
    // (SOBRESCRITO)
    protected gerarMatricula(): number {
        return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    }
}

export { TecnicoAdministrativo }