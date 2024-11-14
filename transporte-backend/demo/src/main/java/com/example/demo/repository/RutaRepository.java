// Ubicación: src/main/java/com/example/demo/repository/RutaRepository.java
package com.example.demo.repository;

import com.example.demo.model.Ruta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RutaRepository extends JpaRepository<Ruta, Long> {
}
