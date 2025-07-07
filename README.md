# Sistema-Gerencimento-Biblioteca-API
OBJETIVO
- Sistema de gerenciamento para uma biblioteca CRUD utilizando banco de dados MySQL, spring boot e front-end com js, html e css.

-INSTRUÇÕES PARA EXECUÇÃO DE SISTEMA LOCAL

**Criando Estrutura de tabelas no Banco de dados**

1.	Criar conexão com no MySQL Workbench 
2.	Colar e executar código do arquivo “model.sql” para criação da estrutura de tabela de livros localizado na pasta database.

**Iniciando servidor** 
1.  Executar IDE IntelliJ.
2.	Abrir pasta Sistema-Gerencimento-Biblioteca-APIcódigo.
3.	Executar arquivo App1.

**Iniciando Front** 
1.  Executar IDE VSCODE.
2.	Abrir pasta Front-Crud-API-Sistema-Gerenciamento-Biblioteca com IDE VSCODE com a extensão live service.
3.	Executar comando "Go Live"

DETABALHAMENTO DE CLASSES E DIAGRAMA DE CLASSES 
- Classe livrosControler controlar ações comandadas pelo front.
- Classe livrosService  comandar ações no banco de dados.
- Classe livro com dados para construção do objeto livro.
- Interface livroRepository para herdar métodos para construção na classe service.
- Interface JpaResporitory para sla.

![image](https://github.com/user-attachments/assets/b80c663c-7d98-4a62-a5a4-39b29e878abb)

