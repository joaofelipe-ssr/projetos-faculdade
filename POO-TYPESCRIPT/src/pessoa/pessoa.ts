import { Endereco } from "../endereco/endereco";

abstract class Pessoa {

    // ATRIBUTOS
    protected _matricula: number = 0;
    private _nome: string = '';
    private _sobrenome: string = '';
    private _sexo: string = '';
    private _CPF: string = '';
    private _idade: number = 0;
    private _brasileiro: boolean = true;
    private _enderecos: Endereco[] = [];

    // ATRIBUTOS ESTÁTICOS
    private static quantidadePessoas: number = 0;

    // GETTERS E SETTERS
    public get matricula(): number {
        return this._matricula;
    }

    protected set matricula(value: number) {
        this._matricula = value;
    }

     public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }
    public set sobrenome(value: string) {
        this._sobrenome = value;
    }

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    public get CPF(): string {
        return this._CPF;
    }

    public set CPF(valor: string) {
        let padraoCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/; //ASSUMINDO O FORMATO: 000.000.000-00
        if (padraoCPF.test(valor)) {
            this._CPF = valor;
        } else {
            throw Error("CPF INVÁLIDO!");
        } 
    }

     public get idade(): number {
        return this._idade;
    }
    public set idade(value: number) {
        this._idade = value;
    }

    public get brasileiro(): boolean {
        return this._brasileiro;
    }
    public set brasileiro(value: boolean) {
        this._brasileiro = value;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }
    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    // CONSTRUTOR
    constructor(
        nome: string, sobrenome: string,
        sexo: string, CPF: string, idade: number,
        brasileiro: boolean, enderecos: Endereco[]
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.CPF = CPF;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        Pessoa.quantidadePessoas++;
    }

    // MÉTODOS DE INSTÂNCIA
    public exibirNomeCompleto(): string {
        return (`Nome completo: ${this.nome} ${this.sobrenome}`);
    }

    public recuperarEndereco(i: number): Endereco | undefined {
        return this.enderecos[i];
    }

    // MÉTODOS ESTÁTICOS
    public static getQuantidadePessoas(): number {
        return Pessoa.quantidadePessoas;
    }

    // MÉTODOS ABSTRATOS
    protected abstract gerarMatricula(): number;
}    

export { Pessoa }