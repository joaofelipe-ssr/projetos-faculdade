import { Categoria } from "./modules/catalogo/domain/categoria.entity";
import { RecuperarCategoriaProps } from "./modules/catalogo/domain/categoria.types";
import { CategoriaMap } from "./modules/catalogo/mappers/categoria.map";
import { DomainException } from "./shared/domain/domain.exception";
import { writeFile, readFile } from "node:fs";

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

    //PERSISTINDO E RECUPERANDO EM ARQUIVO - FILE SYSTEM
    let arrayCategorias = [];
    arrayCategorias.push(categoria.toDTO());
    arrayCategorias.push(categoria2.toDTO());

    writeFile('../categorias.json', JSON.stringify(arrayCategorias), function(error:any) {
        if(error) throw error;
        console.log('Arquivo Salvo com Sucesso!');
        readFile('../categorias.json', (error, dataGravadoArquivo) => {
            if(error) throw error;
            console.log('Leitura de Arquivo!')
            let categoriaSalvas: [] = JSON.parse(dataGravadoArquivo.toString());
            categoriaSalvas.forEach(categoriaJSON => {
                console.log(categoriaJSON);
                console.log(CategoriaMap.toDomain(categoriaJSON))
            })
        });
    });
} 
catch (error:any) {
    if(error instanceof DomainException) {
        console.log('Exceção de Domínio');
        console.log(error.message);
    } else {
        console.log('Exceção Genérica');
        console.log(error.message);
    }
} 
finally {
    console.log('Ação que deve ser executada em caso de sucesso e em caso de exceção');
}
