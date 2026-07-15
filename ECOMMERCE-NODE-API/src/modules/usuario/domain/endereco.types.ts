//ATRIBUTOS QUE DEFINEM O ENDEREÇO
interface IEndereco {
    id?: string;
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
}

//TIPO PARA CRIAR UM NOVO ENDEREÇO
type CriarEnderecoProps = Omit<IEndereco, "id">;

//ATRIBUTOS NECESSÁRIOS PARA RECUPERAR UM ENDEREÇO EXISTENTE
type RecuperarEnderecoProps = Required<IEndereco>;

export { 
    IEndereco, 
    CriarEnderecoProps, 
    RecuperarEnderecoProps 
};