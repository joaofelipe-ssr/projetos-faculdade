import { Categoria } from "./modules/catalogo/domain/categoria.entity";
import { DomainException } from "./shared/domain/domain.exception";

//TESTES
try {
    let categoria: Categoria;
    categoria = Categoria.criar({ nome: 'café' });
    console.log(categoria);
} 
catch (error:any) {
    if(error instanceof DomainException) {
        console.log(error.message);
    }
} 
finally {
    console.log('Ação que deve ser executada em caso de sucesso e em caso de exceção');
}
