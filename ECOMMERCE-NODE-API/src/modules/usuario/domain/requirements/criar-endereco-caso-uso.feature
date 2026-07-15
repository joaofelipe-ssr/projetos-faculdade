Feature: Criar Endereço
    Como um <Cliente>
    Eu quero <Criar um endereço>
    De modo que <Os pedidos realizados sejam entregues neste endereço> 

Scenario: Endereço válido (Padrão)
    Dado (Given) [Endereço válido]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [O Endereço deve ser criado corretamente]

Scenario: Endereço inválido - CEP é nulo ou indefinido (Execeção)
    Dado [Um endereço com CEP nulo ou indefinido]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que o CEP do endereço é nulo ou indefinido deve ser apresentado]
	
Scenario: Endereço inválido - CEP não possui o formato correto (Execeção)
    Dado [
		Um endereço com CEP no formato incorreto
		Obs.: Formato correto do CEP é composto por oito números — cinco dígitos principais e um sufixo de três dígitos (00000-000)
		Obs.: Usar expressão regular para validar o formado correto
	]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que o CEP do endereço está no formato incorreto deve ser apresentado]	
	
Scenario: Endereço inválido - Rua é nula ou indefinida (Execeção)
    Dado [Um endereço com rua nula ou indefinida]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que a Rua do endereço é nula ou indefinida deve ser apresentado]	
	
Scenario: Endereço inválido - Rua do endereço não atende o tamanho mínimo (5) (Execeção)
    Dado [Um endereço com rua que não atende ao tamanho mínimo]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que a rua do endereço não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Endereço inválido - Rua do endereço não atende o tamanho máximo (150) (Execeção)
    Dado [Um endereço com rua que não atende ao tamanho máximo]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que a rua do endereço não possui um tamanho máximo válido deve ser apresentado]	
	
Scenario: Endereço inválido - Bairro é nulo ou indefinido (Execeção)
    Dado [Um endereço com Bairro nulo ou indefinido]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que o Bairro do endereço é nulo ou indefinido deve ser apresentado]		
	
Scenario: Endereço inválido - Bairro do endereço não atende o tamanho mínimo (5) (Execeção)
    Dado [Um endereço com bairro que não atende ao tamanho mínimo]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que o bairro do endereço não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Endereço inválido - Bairro do endereço não atende o tamanho máximo (50) (Execeção)
    Dado [Um endereço com bairro que não atende ao tamanho máximo]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que o bairro do endereço não possui um tamanho máximo válido deve ser apresentado]		
	
Scenario: Endereço inválido - Cidade é nula ou indefinida (Execeção)
    Dado [Um endereço com cidade nula ou indefinida]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que a cidade do endereço é nula ou indefinida deve ser apresentado]		
	
Scenario: Endereço inválido - Estado é nulo ou indefinido (Execeção)
    Dado [Um endereço com estado nulo ou indefinido]
	Quando [Solicitar a Criação de um Endereço]
	Então [Um erro informando que o estado do endereço é nulo ou indefinido deve ser apresentado]		

