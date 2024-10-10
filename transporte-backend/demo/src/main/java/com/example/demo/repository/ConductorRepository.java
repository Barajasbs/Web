package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Conductor;
import org.springframework.stereotype.Repository; 
@Repository
public interface ConductorRepository extends JpaRepository<Conductor, Long> {
}
