import { TecnicoAdministrativo } from "./tecnicoadministrativo";
import { Endereco } from "../endereco/endereco";

class Bibliotecario extends TecnicoAdministrativo {

    // ATRIBUTOS
    private _crb: number = 0;

    // GETTERS E SETTERS
    public get crb(): number {
        return this._crb;
    }

    public set crb(value: number) {
        this._crb = value;
    }

    // CONSTRUTOR
    constructor(
        nome: string, sobrenome: string,
        sexo: string, CPF: string, idade: number,
        brasileiro: boolean, enderecos: Endereco[],
        crb: number
    ) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.crb = crb;
    }    
}

export { Bibliotecario }