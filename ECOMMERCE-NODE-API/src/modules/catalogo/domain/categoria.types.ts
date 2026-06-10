//ATRIBUTOS QUE DEFINEM A CATEGORIA
interface ICategoria {
    id: string;
    nome: string;
}

//TIPO PARA CRIAR UMA NOVA CATEGORIA
type CriarCategoriaProps = Omit<ICategoria, "id">;

export { ICategoria, CriarCategoriaProps };