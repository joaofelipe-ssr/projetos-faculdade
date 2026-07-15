import { describe, expect, test } from 'vitest';
import { CriarEnderecoProps, RecuperarEnderecoProps } from './endereco.types';
import { Endereco } from './endereco.entity';
import { IDEntityUUIDInvalid } from '../../../shared/domain/domain.exception';
import { 
    CEPFormatoInvalido, 
    CEPNuloOuIndefinido, RuaTamanhoMinimoInvalido, 
    RuaTamanhoMaximoInvalido, BairroTamanhoMinimoInvalido, 
    BairroTamanhoMaximoInvalido, CidadeNulaOuIndefinida,
    EstadoNuloOuIndefinido
} from './endereco.exception';

describe('Entidade de Domínio: Criar Endereço', () => {

    test('Deve Criar Um Endereço Válido', async () => {
        const enderecoValido: CriarEnderecoProps = {
            cep: '49480-000',
            rua: 'Avenida Principal de Simão Dias',
            bairro: 'Centro',
            cidade: 'Simão Dias',
            estado: 'SE'
        };

        expect(Endereco.criar(enderecoValido)).toBeInstanceOf(Endereco);
    });

    test('Não Deve Criar Endereço Com CEP em Formato Inválido', async () => {
        const enderecoCEPInvalido: CriarEnderecoProps = {
            cep: '49480000', //sem o hífen
            rua: 'Rua Travessa A',
            bairro: 'Conjunto Caçula Valdares',
            cidade: 'Simão Dias',
            estado: 'SE'
        };

        expect(() => Endereco.criar(enderecoCEPInvalido)).toThrowError(CEPFormatoInvalido);
    });

    test('Não Deve Criar Endereço Com Rua Menor Que 5 Caracteres', async () => {
        const enderecoRuaCurta: CriarEnderecoProps = {
            cep: '49480-000',
            rua: 'Rua', //3 caracteres (inválido)
            bairro: 'Centro',
            cidade: 'Simão Dias',
            estado: 'SE'
        };

        expect(() => Endereco.criar(enderecoRuaCurta)).toThrowError(RuaTamanhoMinimoInvalido);
    });

    test('Não Deve Criar Endereço Com Rua Maior Que 150 Caracteres', async () => {
        const ruaGigante = 'a'.repeat(151);
        const enderecoRuaLonga: CriarEnderecoProps = {
            cep: '49480-000',
            rua: ruaGigante,
            bairro: 'Centro',
            cidade: 'Simão Dias',
            estado: 'SE'
        };

        expect(() => Endereco.criar(enderecoRuaLonga)).toThrowError(RuaTamanhoMaximoInvalido);
    });

    test('Não Deve Criar Endereço Com Bairro Menor Que 5 Caracteres', async () => {
        const enderecoBairroCurto: CriarEnderecoProps = {
            cep: '49480-000',
            rua: 'Rua Travessa A',
            bairro: 'Con', //menos que 5 caracteres
            cidade: 'Simão Dias',
            estado: 'SE'
        };

        expect(() => Endereco.criar(enderecoBairroCurto)).toThrowError(BairroTamanhoMinimoInvalido);
    });

    test('Não Deve Criar Endereço Com Bairro Maior Que 50 Caracteres', async () => {
        const bairroGigante = 'b'.repeat(51);
        const enderecoBairroLongo: CriarEnderecoProps = {
            cep: '49480-000',
            rua: 'Rua Travessa A',
            bairro: bairroGigante,
            cidade: 'Simão Dias',
            estado: 'SE'
        };

        expect(() => Endereco.criar(enderecoBairroLongo)).toThrowError(BairroTamanhoMaximoInvalido);
    });

    test('Não Deve Criar Endereço Com Cidade Nula Ou Espaço Em Branco', async () => {
        const enderecoSemCidade: CriarEnderecoProps = {
            cep: '49480-000',
            rua: 'Rua Travessa A',
            bairro: 'Centro',
            cidade: '   ',
            estado: 'SE'
        };

        expect(() => Endereco.criar(enderecoSemCidade)).toThrowError(CidadeNulaOuIndefinida);
    });

    test('Não Deve Criar Endereço Com Estado Vazio', async () => {
        const enderecoSemEstado: CriarEnderecoProps = {
            cep: '49480-000',
            rua: 'Rua Travessa A',
            bairro: 'Centro',
            cidade: 'Simão Dias',
            estado: ''
        };

        expect(() => Endereco.criar(enderecoSemEstado)).toThrowError(EstadoNuloOuIndefinido);
    });

});

describe('Entidade de Domínio: Recuperar Endereço', () => {

    test('Deve Recuperar Um Endereço Válido', async () => {
        const enderecoValido: RecuperarEnderecoProps = {
            id: '6bee5708-7264-4cee-9993-3fb21f153be9',
            cep: '49480-000',
            rua: 'Rua Travessa A',
            bairro: 'Centro',
            cidade: 'Simão Dias',
            estado: 'SE'
        };

        expect(Endereco.recuperar(enderecoValido)).toBeInstanceOf(Endereco);
    });

    test('Não Deve Recuperar Endereço Com ID Inválido', async () => {
        const enderecoIDInvalido: RecuperarEnderecoProps = {
            id: '12345-id-invalido',
            cep: '49160-000',
            rua: 'Avenida Principal de Lagarto',
            bairro: 'Centro',
            cidade: 'Lagarto',
            estado: 'SE'
        };

        expect(() => Endereco.recuperar(enderecoIDInvalido)).toThrowError(IDEntityUUIDInvalid);
    });

});