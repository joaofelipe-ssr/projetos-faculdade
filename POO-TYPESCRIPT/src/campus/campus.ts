import { Endereco } from '../endereco/endereco';
import { Aluno } from '../aluno/aluno';
import { Professor } from '../professor/professor';
import { Curso } from '../curso/curso';
import { TecnicoAdministrativo } from '../tecnico/tecnicoadministrativo';

class Campus {

    //ATRIBUTOS
    private _nome: string = '';
    private _enderecos: Endereco[] = [];
    private _listaAlunos: Aluno[] = [];
    private _listaProfessores: Professor[] = [];
    private _listaTecnicos: TecnicoAdministrativo[] = [];
    private _cursosOfertados: Curso[] = [];
    private static _quantidadeAlunos: number = 0;

    // GETTERS E SETTERS
    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }

    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    public get listaAlunos(): Aluno[] {
        return this._listaAlunos;
    }

    public set listaAlunos(value: Aluno[]) {
        this._listaAlunos = value;
    }

    public get listaProfessores(): Professor[] {
        return this._listaProfessores;
    }

    public set listaProfessores(value: Professor[]) {
        this._listaProfessores = value;
    }

    public get listaTecnicos(): TecnicoAdministrativo[] {
        return this._listaTecnicos;
    }

    public set listaTecnicos(value: TecnicoAdministrativo[]) {
        this._listaTecnicos = value;
    }

    public get cursosOfertados(): Curso[] {
        return this._cursosOfertados;
    }

    public set cursosOfertados(value: Curso[]) {
        this._cursosOfertados = value;
    }

    // CONSTRUTOR
    constructor(nome: string, enderecos: Endereco[]) {
        this.nome = nome;
        this.enderecos = enderecos;
    }

    // MÉTODO PARA CONTAR ALUNOS
    public static get quantidadeAlunos(): number {
        return Campus._quantidadeAlunos;
    }

    public get quantidadeAlunos(): number {
        return this._listaAlunos.length;
    }

    // MÉTODOS PARA ADICIONAR MEMBROS
    public adicionarAluno(aluno: Aluno): void {
        this._listaAlunos.push(aluno);
        Campus._quantidadeAlunos++;
    }

    public adicionarProfessor(professor: Professor): void {
        this._listaProfessores.push(professor);
        professor.campusLotado = this;
    }

    public adicionarTecnico(tecnico: TecnicoAdministrativo): void {
        this._listaTecnicos.push(tecnico);
    }
}

export { Campus }