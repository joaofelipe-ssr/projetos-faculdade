import { Pessoa } from "./pessoa/pessoa";
import { Aluno, SituacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { TecnicoAdministrativo } from "./tecnico/tecnicoadministrativo";
import { Bibliotecario } from "./tecnico/bibliotecario";
import { Psicologo } from "./tecnico/psicologo";
import { Endereco } from "./endereco/endereco";
import { Curso } from "./curso/curso";
import { CursoSubsequente } from "./curso/cursosubsequente";
import { CursoIntegrado } from "./curso/cursointegrado";
import { Campus } from "./campus/campus";

// ENDEREÇOS
const Campus1 = new Endereco("49400-000", 100, "Rua Teste", "Centro", "Lagarto", "SE");
const Campus2 = new Endereco("49400-000", 111, "Rua Teste", "Centro", "Aracaju", "SE");
const Residencia1 = new Endereco("49400-000", 84, "Rua A", "Centro", "Simão Dias", "SE");
const Residencia2 = new Endereco("49400-000", 13, "Rua D", "Centro", "Lagarto", "SE");
const Residencia3 = new Endereco("49400-000", 17, "Rua E", "Centro", "São Cristóvão", "SE");

// CURSOS
const curso1 = new CursoIntegrado("Nutrição", 3000, true);
const curso2 = new CursoSubsequente("Sistemas de Informação", 800, true);

// CAMPUS 1
const campusLagarto = new Campus("IFS Campus Lagarto", [Campus1]);

// ALUNO 1
const aluno1 = new Aluno(
    "João", "Felipe", "M", "111.222.333-44", 19, 
    true, [Residencia1], [curso2], SituacaoAluno.ATIVO
);
campusLagarto.adicionarAluno(aluno1);
console.log(`--- TESTE ALUNO ---`);
console.log(aluno1.exibirNomeCompleto());
console.log(`Matrícula: ${aluno1.matricula}`);
aluno1.submeterProjetoPesquisa(); 

// PROFESSOR 1
const professor1 = new Professor(
    "Diego", "Armando", "M", "555.666.777-88", 37, 
    true, [Residencia2], 10000
);
campusLagarto.adicionarProfessor(professor1);
console.log(`\n--- TESTE PROFESSOR ---`);
console.log(`Matrícula: ${professor1.matricula}`);
console.log(`Professor lotado no campus: ${professor1.campusLotado?.nome}`);
professor1.submeterProjetoExtensao();

// TÉCNICOS
const bibliotecario1 = new Bibliotecario(
    "Graziela", "Matos", "F", "999.888.777-66", 42, 
    true, [Residencia1], 12345
);
const psicologo1 = new Psicologo(
    "Everton", "Carlos", "M", "444.333.222-11", 26, 
    true, [Residencia3], 67890
);
campusLagarto.adicionarTecnico(bibliotecario1);
campusLagarto.adicionarTecnico(psicologo1);

console.log(`\n--- TESTE TÉCNICOS ---`);
console.log(`Matrícula Bibliotecário: ${bibliotecario1.matricula} | CRB: ${bibliotecario1.crb}`);
console.log(`Matrícula Psicólogo: ${psicologo1.matricula} | CRP: ${psicologo1.crp}`);

// GESTÃO DO CAMPUS
console.log(`\n--- TESTE GESTÃO DO CAMPUS ---`);
console.log(`Alunos neste Campus: ${campusLagarto.listaAlunos.length}`);
console.log(`Total Global de Alunos: ${Campus.quantidadeAlunos}`);

// CAMPUS 2
const campusAracaju = new Campus("IFS Campus Aracaju", [Campus2]);
const aluno2 = new Aluno("Naiara", "dos Santos", "F", "000.111.222-33", 17, true, [Residencia1], [curso1], SituacaoAluno.ATIVO);
campusAracaju.adicionarAluno(aluno2);

console.log(`Total Global de Alunos após novo campus: ${Campus.quantidadeAlunos}`);


