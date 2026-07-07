import { describe, expect, test } from 'vitest';
import { CriarCategoriaProps, RecuperarCategoriaProps } from './categoria.types';
import { Categoria } from './categoria.entity';
import { NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from './categoria.exception';
import { IDEntityUUIDInvalid } from '../../../shared/domain/domain.exception';

//Suite de Testes de Unidade - Entidade de Domínio
//Usando a descrição, você pode definir como um conjunto de testes ou benchmarks relacionados
describe('Entidade de Domínio: Criar Categoria', () => {

    //Teste define um conjunto de expectativas relacionadas. 
    test('Deve Criar Uma Categoria Válida', async () => {

        //Dado (Given)
        const categoriaValida: CriarCategoriaProps = {
            nome: 'café'
        };

        //Quando (When) e Então (Then)
        expect(Categoria.criar(categoriaValida))
            .to.be.instanceof(Categoria);

    });

    test('Não Deve Criar Categoria Com Nome Inválido (Tamanho Mínimo)', async () => {

        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: 'ca'
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.criar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMinimoInvalido);

    });

    test('Não Deve Criar Categoria Com Nome Inválido (Tamanho Máximo)', async () => {

        //Dado (Given)
        //Nome maior que 50 caracteres
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: 'cafeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeé'
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.criar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMaximoInvalido);

    });

});

describe('Entidade de Domínio: Recuperar Categoria', () => {

   test('Deve Recuperar Uma Categoria Válida', async () => {

      //Dado (Given)
      const categoriaValida: RecuperarCategoriaProps = {
         id: '6bee5708-7264-4cee-9993-3fb21f153be9',
         nome: 'creatina'
      };

      //Quando (When) e Então (Then)
      expect(Categoria.recuperar(categoriaValida))
         .to.be.instanceof(Categoria);

   });

   test('Não Deve Recuperar Categoria Com ID Inválido (UUID Inválido)', async () => {

      //Dado (Given)
      //ID inválido (não é um UUID válido)
      const categoriaIdInvalido: RecuperarCategoriaProps = {
         id: '1234',
         nome: 'creatina'
      };

      //Quando (When) e Então (Then)
      expect(() => Categoria.recuperar(categoriaIdInvalido))
         .toThrowError(IDEntityUUIDInvalid);

   });

   test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Mínimo)', async () => {

      //Dado (Given)
      //Nome menor que três caracteres
      const categoriaNomeInvalido: RecuperarCategoriaProps = {
         id: '6bee5708-7264-4cee-9993-3fb21f153be9',
         nome: 'cr'
      };

      //Quando (When) e Então (Then)
      expect(() => Categoria.recuperar(categoriaNomeInvalido))
         .toThrowError(NomeCategoriaTamanhoMinimoInvalido);

   });

   test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Máximo)', async () => {

      //Dado (Given)
      //Nome maior que 50 caracteres
      const categoriaNomeInvalido: RecuperarCategoriaProps = {
         id: '6bee5708-7264-4cee-9993-3fb21f153be9',
         nome: 'creeeeeeeeeeeeeaaaaaaaaaatiiiiiiiiiiiiiiiiiiiiiiinaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      //Quando (When) e Então (Then)
      expect(() => Categoria.recuperar(categoriaNomeInvalido))
         .toThrowError(NomeCategoriaTamanhoMaximoInvalido);

   });

});