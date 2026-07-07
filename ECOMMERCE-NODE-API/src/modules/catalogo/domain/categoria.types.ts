//ATRIBUTOS QUE DEFINEM A CATEGORIA
interface ICategoria {
    id? : string;
    nome: string;
}

//TIPO PARA CRIAR UMA NOVA CATEGORIA
type CriarCategoriaProps = Omit<ICategoria, "id">;

//Atributos que são necessários para recuperar uma categoria
type RecuperarCategoriaProps = Required<ICategoria>;

export { ICategoria,
         CriarCategoriaProps,
         RecuperarCategoriaProps 
};