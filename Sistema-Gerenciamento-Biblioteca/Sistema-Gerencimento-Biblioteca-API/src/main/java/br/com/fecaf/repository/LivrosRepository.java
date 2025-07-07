package br.com.fecaf.repository;

import br.com.fecaf.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivrosRepository extends JpaRepository<Livro, Integer> {
}
