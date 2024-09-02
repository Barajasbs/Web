package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository; 
 // Optional, but often used
import com.example.demo.model.Bus;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {
}
