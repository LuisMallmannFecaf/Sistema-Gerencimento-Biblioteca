package br.com.fecaf.controller;

import br.com.fecaf.model.Livro;
import br.com.fecaf.services.LivrosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livros")
@CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "*")
public class LivrosController {

    @Autowired
    private LivrosService livroService;

    //Endpoint para listar livros existentes no BD
    @GetMapping("/listarLivros")
    public List<Livro> listarLivros(){
        return livroService.listarLivros();
    }

    //Endpoint para >>>>> chamar método para cadatrar um livro novo
    @PostMapping("/cadastrarLivro")
    public ResponseEntity<Livro> salvarLivro(@RequestBody Livro livro){
        Livro newLivro = livroService.salvarLivro(livro);
        return ResponseEntity.status(HttpStatus.CREATED).body(newLivro);
    }

    //Endpoint para >>>>> chamar método para deletar um livro no BD
    @DeleteMapping("/deletarLivro/{id}")
    public ResponseEntity<Void> deletarLivro (@PathVariable int id){
            livroService.deletarLivro(id);
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    //Endpoint para >>>>> chamar método para atualizar um livro no BD
    @PutMapping("/atualizarLivros/{id}")
    public ResponseEntity<Livro> autalizarLivro(@PathVariable Integer id, @RequestBody Livro livro){
            Livro livroAtualizado = livroService.autalizarLivro(id,livro);
            if(livroAtualizado != null){
                return ResponseEntity.ok(livroAtualizado);
            }else {
                return ResponseEntity.notFound().build();
            }
    }

}
