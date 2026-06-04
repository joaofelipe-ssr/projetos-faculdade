import { Curso } from "./curso";

class CursoSubsequente extends Curso {

    //ATRIBUTOS
    private _estagioObrigatorio: boolean = false;

    //GETTERS E SETTERS
    public get estagioObrigatorio(): boolean {
        return this._estagioObrigatorio;
    }
    
    public set estagioObrigatorio(value: boolean) {
        this._estagioObrigatorio = value;
    }

    //CONSTRUTOR
    constructor(nome: string, cargaHoraria: number, estagioObrigatorio: boolean) {
        super(nome, cargaHoraria);
        this._estagioObrigatorio = estagioObrigatorio;
    }
}

export { CursoSubsequente }

   