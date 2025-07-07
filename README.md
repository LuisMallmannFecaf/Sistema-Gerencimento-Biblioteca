# Sistema-Gerencimento-Biblioteca-API
OBJETIVO
- Sistema de gerenciamento para uma biblioteca CRUD utilizando banco de dados MySQL, spring boot e front-end com js, html e css.

-INSTRUÇÕES PARA EXECUÇÃO DE SISTEMA LOCAL
**Baixar, extrair codigo e inicializar**
1.	Baixar código fonte em arquivo ZIP.
2.	Extrair Codigo fonte arquivo ZIP.
3.  Executar IDE IntelliJ.
4.	Abrir pasta Sistema-Gerencimento-Biblioteca-APIcódigo.
5.  Executar IDE VSCODE.
6.	Abrir pasta Front-Crud-API-Sistema-Gerenciamento-Biblioteca com IDE VSCODE com a extensão live service.

**Criando Estrutura de tabelas no Banco de dados**
1.	Criar conexão com no MySQL Workbench 
2.	Colar e executar código do arquivo “model.sql” para criação da estrutura de tabela de livros localizado na pasta database.

**Iniciando servidor** 
1.	Executar classe App1.

**Iniciando Front** 
1.	Executar comando "Go Live"

DETABALHAMENTO DE CLASSES E DIAGRAMA DE CLASSES 
1.	App1 - Inicialização da aplicação e servidor spring boot.
2.	Livro - Propriedades relacionadas ao objeto livro que será instanciado com seus getters e setters.
3.	LivroController – Métodos relacionados a achar/ler, salvar, deletar e atualizar livros através de comando do fronte que serão enviadas para o servidor.
4.	LivroService – Método relacionados a achar/ler, salvar, deletar e atualizar livros onde a classe requisita que o banco de dados realize essas tarefas. 
5.	Livro Repository – Classe interface para herdar propriedades JPARepository que auxilia na construção de métodos responsáveis para trabalhar acesso de dados do Banco de Dados. 
6.	Model.sql – Código de Construção de tabela no Banco de Dados.
7.	Application.properties – Configurações básicas do servidor Spring Boot.

Front-End

8.	Style.css – Estilização da página html. 
9.	Script.js – lógica do front-End, métodos relacionados a carregamento, renderização, adicionamento, remoção de gráficos e informações no Front para envio para Back-End

![image](https://github.com/user-attachments/assets/b80c663c-7d98-4a62-a5a4-39b29e878abb)



https://github.com/user-attachments/assets/3d3fac98-0c2c-4003-a3e8-f647cee3e399

