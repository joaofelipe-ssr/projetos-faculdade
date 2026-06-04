import { Curso } from "./curso";

class CursoIntegrado extends Curso {

    //ATRIBUTOS
    private _nivelMedio: boolean = true;

    //GETTERS E SETTERS
    public get nivelMedio(): boolean {
        return this._nivelMedio;
    }

    public set nivelMedio(value: boolean) {
        this._nivelMedio = value;
    }

    //CONSTRUTOR
    constructor(nome: string, cargaHoraria: number, nivelMedio: boolean) {
        super(nome, cargaHoraria);
        this._nivelMedio = nivelMedio;
    }
}

export { CursoIntegrado }


