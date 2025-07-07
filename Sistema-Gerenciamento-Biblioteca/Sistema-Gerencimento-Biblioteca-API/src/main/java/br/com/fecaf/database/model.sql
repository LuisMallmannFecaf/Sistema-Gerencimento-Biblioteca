CREATE DATABASE db_livros;
USE  db_livros;

CREATE TABLE tbl_livros(
	id int NOT NULL auto_increment,
    titulo varchar(255) NOT NULL,
    autor varchar(110) NOT NULL,
    npaginas int NOT NULL,
    editora varchar(50) NOT NULL,
    anopublicacao int NOT NULL,
    generolivro varchar(200) NOT NULL,
    capa varchar(200) NOT NULL,
    primary key (id)
);

INSERT INTO tbl_livros(id, titulo, autor, npaginas, editora, anopublicacao,generolivro, capa) VALUES
(0,"O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios","Charles Duhigg", 408 ,"Objetiva",2012,"AutoAjuda","https://m.media-amazon.com/images/I/815iPX0SgkL._SY342_.jpg"),
(0,"Mindset: A nota psicologia do sucesso","Carol S. Dweck",312,"Objetiva",2017,"AutoAjuda","https://m.media-amazon.com/images/I/71Ils+Co9fL._SY342_.jpg"),
(0,"Chapeuzinho Vermelho","Ciranda Cultural",16,"Ciranda Cultural",2018,"Infantil","https://m.media-amazon.com/images/I/71qArR63yGL._SY342_.jpg"),
(0,"Três Porquinhos","Ciranda Cultural",16,"Ciranda Cultural",2018,"Infantil","https://m.media-amazon.com/images/I/71tvADRLuNL._SY342_.jpg");

select * from tbl_livros;

