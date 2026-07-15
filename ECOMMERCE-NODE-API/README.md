# Estudo de Arquitetura e DDD com TypeScript — ecommerce-node-api

Este repositório foi desenvolvido com o objetivo de aprender e fixar os conceitos fundamentais de **Domain-Driven Design (DDD)** e **Clean Architecture** utilizando **TypeScript**.

O projeto foi construído como atividade prática no IFS - Campus Lagarto, servindo como laboratório de estudos para a implementação de modelos de domínio ricos e testes automatizados.

## 🧠 Conceitos Praticados
Durante o desenvolvimento dos módulos (como `Categoria` e `Endereco`), foram exercitados os seguintes pilares de arquitetura de software:
- **Entidades Ricas (DDD):** Criação de classes autovalidadas e com identidade única, encapsuladas com Factory Methods (`criar` e `recuperar`).
- **Tratamento de Exceções de Domínio:** Criação de erros de negócio personalizados herdados de uma exceção base de domínio.
- **Mappers e DTOs:** Uso de camadas de mapeamento para desacoplar as entidades de domínio das estruturas de dados externas.
- **Testes Automatizados:** Escrita de testes de unidade com Vitest para validar cenários de sucesso e fluxos de exceção.

## 🛠️ Tecnologias e Ferramentas
- TypeScript
- Node.js
- Vitest
- VS Code (Ambiente de Desenvolvimento)

---
*Nota: Este projeto é estritamente de caráter acadêmico e de estudo orientado, desenvolvido como atividade prática para o IFS.*