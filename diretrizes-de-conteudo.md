# Diretrizes de Conteúdo para Projetos do Portfólio

Este documento serve como guia de referência e boas práticas de UI/UX para a adição ou atualização de projetos no portfólio. Ele estabelece uma separação rígida entre a **visão conceitual (negócio)** e a **visão de engenharia (técnica)**.

---

## 🎯 Regra de Ouro: Separação de Contextos

Ao escrever sobre um projeto, divida o conteúdo estritamente em duas frentes independentes:

### 1. Descrição do Topo (`description`) — Foco no Negócio
Este texto deve ser direcionado a qualquer visitante, incluindo recrutadores não técnicos, gestores e clientes. Deve ser escrito em linguagem clara e fluida, respondendo estritamente a três perguntas:
*   **Qual é o propósito do projeto?** (O que ele faz?)
*   **Qual problema ele resolve?** (Qual era a dor/desorganização anterior?)
*   **Qual é a finalidade dele?** (O que ele entrega de valor ao final?)

> [!CAUTION]
> **O QUE NÃO ESCREVER AQUI**: 
> Nunca cite siglas de linguagens, frameworks, bibliotecas, padrões de arquitetura ou tópicos avançados (ex: *.NET, React, C#, Clean Architecture, MySQL, JWT, middlewares, paginação nativa*). Esse linguajar técnico assusta leitores corporativos e polui a introdução conceitual do projeto.

---

### 2. Destaques Técnicos (`highlights`) — Foco em Engenharia
Esta seção de bullets rápidos é direcionada a líderes técnicos, desenvolvedores seniores e arquitetos que avaliarão a qualidade e complexidade da sua engenharia de software.
*   **O que escrever aqui**: 
    *   Arquitetura de software utilizada (ex: *Clean Architecture*, desacoplamento modular).
    *   Tecnologias, ORMs e bancos de dados (ex: *React 19, .NET 10, Entity Framework Core, MySQL*).
    *   Lógicas complexas e de alta performance (ex: *processamento assíncrono com async/await, paginação server-side nativa*).
    *   Padrões de segurança e tratamento (ex: *controle de acessos RBAC, tokens JWT, middlewares globais de exceção, validações estruturadas*).

---

## 📝 Exemplo Prático de Aplicação (API RESTful)

### ❌ Incorreto (Misturando Conceito com Tecnologia)
> *"Uma API RESTful desenvolvida em C# e .NET sob os princípios de Clean Architecture para persistência MySQL com Entity Framework, tratando exceções globais..."*

###  Correto (Separação Perfeita)

#### Descrição do Topo:
> *"Um sistema de retaguarda projetado para servir como central inteligente de armazenamento e processamento de dados organizacionais. O projeto resolve a lentidão e a falta de segurança na troca de informações entre sistemas corporativos, com a finalidade de fornecer serviços rápidos, seguros e ininterruptos para que aplicativos e interfaces web consumam e gerenciem dados em tempo real."*

#### Destaques Técnicos:
*   *Arquitetura limpa (Clean Architecture) estrita para total desacoplamento e manutenibilidade do código.*
*   *Injeção de dependência nativa e persistência de dados utilizando Entity Framework Core no MySQL.*
*   *Otimização de recursos e I/O através do uso de processamento assíncrono (async/await).*
