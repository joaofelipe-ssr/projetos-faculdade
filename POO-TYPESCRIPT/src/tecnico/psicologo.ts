import { TecnicoAdministrativo } from "./tecnicoadministrativo";
import { Endereco } from "../endereco/endereco";

class Psicologo extends TecnicoAdministrativo {

    // ATRIBUTOS
    private _crp: number = 0;

    // GETTERS E SETTERS
    public get crp(): number {
        return this._crp;
    }   

    public set crp(value: number) {
        this._crp = value;
    }

    // CONSTRUTOR
    constructor(
        nome: string, sobrenome: string, sexo: string, CPF: string, 
        idade: number, brasileiro: boolean, enderecos: Endereco[], crp: number
    ) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this._crp = crp;
    }
}

export { Psicologo }