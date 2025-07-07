package br.com.fecaf.model;

import javax.persistence.*;

@Entity
@Table(name="tbl_livros")

public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String titulo;
    private String Autor;
    private int npaginas;
    private String editora;
    private int anopublicacao;
    private String generolivro;
    private String capa;

    public String getGenerolivro() {
        return generolivro;
    }

    public void setGenerolivro(String generolivro) {
        this.generolivro = generolivro;
    }

    public int getAnopublicacao() {
        return anopublicacao;
    }
    public void setAnopublicacao(int anopublicacao) {
        this.anopublicacao = anopublicacao;
    }

    public int getNpaginas() {
        return npaginas;
    }

    public void setNpaginas(int npaginas) {
        this.npaginas = npaginas;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return Autor;
    }

    public void setAutor(String autor) {
        Autor = autor;
    }

    public String getEditora() {
        return editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getCapa() {
        return capa;
    }

    public void setCapa(String capa) {
        this.capa = capa;
    }

}
