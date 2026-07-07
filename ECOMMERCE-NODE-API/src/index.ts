import { Categoria } from "./modules/catalogo/domain/categoria.entity";
import { RecuperarCategoriaProps } from "./modules/catalogo/domain/categoria.types";
import { DomainException } from "./shared/domain/domain.exception";

//TESTES
try {
    //CRIAR CATEGORIA
    let categoria: Categoria;
    categoria = Categoria.criar({ nome: 'Notebook' });
    console.log(categoria);

    //RECUPERAR CATEGORIA
    let propsCategoria: RecuperarCategoriaProps = { id: '6bee5708-7264-4cee-9993-3fb21f153be9', nome: 'Creatina' };
    let categoria2: Categoria = Categoria.recuperar(propsCategoria);
    console.log(categoria2);
} 
catch (error:any) {
    if(error instanceof DomainException) {
        console.log(error.message);
    } else {
        console.log(error.message);
    }
} 
finally {
    console.log('Ação que deve ser executada em caso de sucesso e em caso de exceção');
}
