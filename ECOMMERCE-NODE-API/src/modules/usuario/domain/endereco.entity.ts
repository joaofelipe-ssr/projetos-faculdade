import { IEndereco, CriarEnderecoProps, RecuperarEnderecoProps } from "./endereco.types";
import { 
    CEPNuloOuIndefinido, CEPFormatoInvalido,
    RuaNulaOuIndefinida, RuaTamanhoMinimoInvalido,
    RuaTamanhoMaximoInvalido, BairroNuloOuIndefinido,
    BairroTamanhoMinimoInvalido, BairroTamanhoMaximoInvalido,
    CidadeNulaOuIndefinida, EstadoNuloOuIndefinido
} from "./endereco.exception";
import { Entity } from "../../../shared/domain/entity";
import { EnderecoMap } from "../mappers/endereco.map";

class Endereco extends Entity<IEndereco> implements IEndereco {
    //ATRIBUTOS
    private _cep: string;
    private _rua: string;
    private _bairro: string;
    private _cidade: string;
    private _estado: string;

    //GETTERS E SETTERS
    public get cep(): string {
        return this._cep;
    }

    private set cep(value: string) {
        if (!value || value.trim().length === 0) {
            throw new CEPNuloOuIndefinido();
        }
        
        //Valida o formato 00000-000
        const cepRegex = /^\d{5}-\d{3}$/;
        if (!cepRegex.test(value.trim())) {
            throw new CEPFormatoInvalido();
        }
        
        this._cep = value.trim();
    }

    public get rua(): string {
        return this._rua;
    }

    private set rua(value: string) {
        if (!value || value.trim().length === 0) {
            throw new RuaNulaOuIndefinida();
        }
        const ruaLimpa = value.trim();
        if (ruaLimpa.length < 5) {
            throw new RuaTamanhoMinimoInvalido();
        }
        if (ruaLimpa.length > 150) {
            throw new RuaTamanhoMaximoInvalido();
        }
        this._rua = ruaLimpa;
    }

    public get bairro(): string {
        return this._bairro;
    }

    private set bairro(value: string) {
        if (!value || value.trim().length === 0) {
            throw new BairroNuloOuIndefinido();
        }
        const bairroLimpo = value.trim();
        if (bairroLimpo.length < 5) {
            throw new BairroTamanhoMinimoInvalido();
        }
        if (bairroLimpo.length > 50) {
            throw new BairroTamanhoMaximoInvalido();
        }
        this._bairro = bairroLimpo;
    }

    public get cidade(): string {
        return this._cidade;
    }

    private set cidade(value: string) {
        if (!value || value.trim().length === 0) {
            throw new CidadeNulaOuIndefinida();
        }
        this._cidade = value.trim();
    }

    public get estado(): string {
        return this._estado;
    }

    private set estado(value: string) {
        if (!value || value.trim().length === 0) {
            throw new EstadoNuloOuIndefinido();
        }
        this._estado = value.trim();
    }

    //CONSTRUTOR 
    private constructor(endereco: IEndereco) {
        super(endereco.id);
        this.cep = endereco.cep;
        this.rua = endereco.rua;
        this.bairro = endereco.bairro;
        this.cidade = endereco.cidade;
        this.estado = endereco.estado;
    }

    //STATIC FACTORY METHODS
    public static criar(props: CriarEnderecoProps): Endereco {
        return new Endereco(props);
    }

    public static recuperar(props: RecuperarEnderecoProps): Endereco {
        return new Endereco(props);
    }

    //MÉTODOS
    public toDTO(): IEndereco {
        return EnderecoMap.toDTO(this);
    }
}

export { Endereco };