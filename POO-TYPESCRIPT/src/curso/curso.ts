abstract class Curso {

    //ATRIBUTOS
    private _nome: string = '';
    private _cargaHoraria: number = 0;

    //GETTERS E SETTERS
    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get cargaHoraria(): number {
        return this._cargaHoraria;
    }
    
    public set cargaHoraria(value: number) {
        this._cargaHoraria = value;
    }

    //CONSTRUTOR
    constructor(nome: string, cargaHoraria: number) {
        this._nome = nome;
        this._cargaHoraria = cargaHoraria;
    }
}

export { Curso }