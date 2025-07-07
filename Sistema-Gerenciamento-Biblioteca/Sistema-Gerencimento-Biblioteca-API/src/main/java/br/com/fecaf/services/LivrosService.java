package br.com.fecaf.services;

import br.com.fecaf.model.Livro;
import br.com.fecaf.repository.LivrosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivrosService {

    @Autowired
    private LivrosRepository livroRepository;

    //Método para listar livros existentes
    public List<Livro> listarLivros(){
        return livroRepository.findAll();
    }

    /*Método para salvar novo Livro(*/
    public Livro salvarLivro(Livro livro){
        return livroRepository.save(livro);
    }

    public void deletarLivro(int id){
        livroRepository.deleteById(id);
    }

    /*Método para atualizar dados do livro existente*/
    public Livro autalizarLivro(Integer id, Livro livro){
        Optional<Livro> livroExistente = livroRepository.findById(id);
        if(livroExistente.isPresent()){
            Livro livroAtualizado = livroExistente.get();
            //atualiza outros campos conforme necessário
            livroAtualizado.setTitulo(livro.getTitulo());
            livroAtualizado.setAutor(livro.getAutor());
            livroAtualizado.setNpaginas(livro.getNpaginas());
            livroAtualizado.setEditora(livro.getEditora());
            livroAtualizado.setAnopublicacao(livro.getAnopublicacao());
            livroAtualizado.setGenerolivro(livro.getGenerolivro());
            livroAtualizado.setCapa(livro.getCapa());
            return livroRepository.save(livroAtualizado); // salva contato atualizado
        }else{
            return null;
        }
    }

}
