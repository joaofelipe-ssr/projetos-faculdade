import { DomainException } from "../../../shared/domain/domain.exception";

class EnderecoException extends DomainException {
    constructor(message: string = 'Exceção de domínio genérica para Entidade Endereço') {
        super(message);
        this.name = 'EnderecoException';
    }
}

//EXCEÇÕES DE CEP
class CEPNuloOuIndefinido extends EnderecoException {
    public constructor(message: string = 'O CEP do endereço é nulo ou indefinido.') {
        super(message);
        this.name = 'CEPNuloOuIndefinido';
    }
}

class CEPFormatoInvalido extends EnderecoException {
    public constructor(message: string = 'O CEP deve estar no formato válido (00000-000).') {
        super(message);
        this.name = 'CEPFormatoInvalido';
    }
}

//EXCEÇÕES DE RUA
class RuaNulaOuIndefinida extends EnderecoException {
    public constructor(message: string = 'A rua do endereço é nula ou indefinida.') {
        super(message);
        this.name = 'RuaNulaOuIndefinida';
    }
}

class RuaTamanhoMinimoInvalido extends EnderecoException {
    public constructor(message: string = 'A rua deve possuir no mínimo 5 caracteres.') {
        super(message);
        this.name = 'RuaTamanhoMinimoInvalido';
    }
}

class RuaTamanhoMaximoInvalido extends EnderecoException {
    public constructor(message: string = 'A rua deve possuir no máximo 150 caracteres.') {
        super(message);
        this.name = 'RuaTamanhoMaximoInvalido';
    }
}

//EXCEÇÕES DE BAIRRO
class BairroNuloOuIndefinido extends EnderecoException {
    public constructor(message: string = 'O bairro do endereço é nulo ou indefinido.') {
        super(message);
        this.name = 'BairroNuloOuIndefinido';
    }
}

class BairroTamanhoMinimoInvalido extends EnderecoException {
    public constructor(message: string = 'O bairro deve possuir no mínimo 5 caracteres.') {
        super(message);
        this.name = 'BairroTamanhoMinimoInvalido';
    }
}

class BairroTamanhoMaximoInvalido extends EnderecoException {
    public constructor(message: string = 'O bairro deve possuir no máximo 50 caracteres.') {
        super(message);
        this.name = 'BairroTamanhoMaximoInvalido';
    }
}

//EXCEÇÕES DE CIDADE E ESTADO
class CidadeNulaOuIndefinida extends EnderecoException {
    public constructor(message: string = 'A cidade do endereço é nula ou indefinida.') {
        super(message);
        this.name = 'CidadeNulaOuIndefinida';
    }
}

class EstadoNuloOuIndefinido extends EnderecoException {
    public constructor(message: string = 'O estado do endereço é nulo ou indefinido.') {
        super(message);
        this.name = 'EstadoNuloOuIndefinido';
    }
}

export {
    EnderecoException,
    CEPNuloOuIndefinido,
    CEPFormatoInvalido,
    RuaNulaOuIndefinida,
    RuaTamanhoMinimoInvalido,
    RuaTamanhoMaximoInvalido,
    BairroNuloOuIndefinido,
    BairroTamanhoMinimoInvalido,
    BairroTamanhoMaximoInvalido,
    CidadeNulaOuIndefinida,
    EstadoNuloOuIndefinido
};