import { Pessoa } from "../pessoa/pessoa";
import { Endereco } from "../endereco/endereco";
import { Projeto } from "../projeto/projeto";
import { Campus } from "../campus/campus";

class Professor extends Pessoa implements Projeto  {

    // ATRIBUTOS
    private _salario: number = 0;
    private _campusLotado: Campus | null = null;

    //GETTERS E SETTERS
    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
    }

    public get campusLotado(): Campus | null {
         return this._campusLotado; 
    }

    public set campusLotado(value: Campus | null) {
        this._campusLotado = value;
    }

    // CONSTRUTOR
     constructor(
        nome: string, sobrenome: string,
        sexo: string, CPF: string, idade: number,
        brasileiro: boolean, enderecos: Endereco[],
        salario: number
    ) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
        this.salario = salario;
    }

    // MÉTODOS DE INSTÂNCIA 
    // (SOBRESCRITO)
    protected gerarMatricula(): number {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
    }

    // MÉTODOS DE INSTÂNCIA 
    // (IMPLEMENTAÇÃO DA INTERFACE)
    public submeterProjetoPesquisa(): void {
        console.log("Projeto de pesquisa submetido por um professor.");
    }

    public submeterProjetoExtensao(): void {
        console.log("Projeto de extensão submetido por um professor.");
    }
}

export { Professor }