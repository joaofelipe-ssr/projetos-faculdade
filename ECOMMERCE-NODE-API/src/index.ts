import { Categoria } from "./modules/catalogo/domain/categotia.entity";

//TESTES
try {
    let categoria = Categoria.criar({ nome: 'Naiara' });
    console.log(categoria)
} catch (error:any) {
    console.log(error.message)
} finally {
    console.log('Ação que deve ser executada em caso de sucesso e em caso de exceção');
}
