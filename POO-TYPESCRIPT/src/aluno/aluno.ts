import { Pessoa } from "../pessoa/pessoa";
import { Endereco } from "../endereco/endereco";
import { Projeto } from "../projeto/projeto";
import { Curso } from "../curso/curso";

class Aluno extends Pessoa implements Projeto {

    // ATRIBUTOS
    private _curso: Curso[] = [];
    private _situacao: SituacaoAluno = SituacaoAluno.ATIVO;

    // GETTERS E SETTERS
    public get curso(): Curso[] {
        return this._curso;
    }
    public set curso(value: Curso[]) {
        this._curso = value;
    }

    public get situacao(): SituacaoAluno {
        return this._situacao;
    }
    public set situacao(value: SituacaoAluno) {
        this._situacao = value;
    }

    // CONSTRUTOR
    constructor(
        nome: string, sobrenome: string,
        sexo: string, CPF: string, idade: number,
        brasileiro: boolean, enderecos: Endereco[],
        curso: Curso[], situacao: SituacaoAluno
    ) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
        this.curso = curso;
        this.situacao = situacao;
    } 

    // MÉTODOS DE INSTÂNCIA 
    // (SOBRESCRITO)
    protected gerarMatricula(): number {
        let ano: number = new Date().getFullYear();
        let numeroAleatorio: number = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        return Number(`${ano}${numeroAleatorio}`);
    }

    // MÉTODOS DE INSTÂNCIA 
    // (IMPLEMENTAÇÃO DA INTERFACE)
    public submeterProjetoPesquisa(): void {
        console.log("Projeto de pesquisa submetido por um aluno.");
    }

    public submeterProjetoExtensao(): void {
        console.log("Projeto de extensão submetido por um aluno");
    }
}

enum SituacaoAluno {
    ATIVO = 'Ativo',
    MATRICULADO = 'Matriculado',
    TRANCADO = 'Trancado',
    CONCLUIDO = 'Concluido',
    CANCELADO = 'Cancelado',
    FORMANDO = 'Formando'
}

export { Aluno, SituacaoAluno }