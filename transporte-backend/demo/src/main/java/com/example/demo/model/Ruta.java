package com.example.demo.model;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

import jakarta.persistence.GenerationType;


@Entity
public class Ruta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codigo;
    @ElementCollection
    private List<String> estaciones;
    private String horario; // Formato sugerido: "Lunes-Viernes: 6:00-22:00, Sábado: 8:00-20:00"

    // Getters y Setters
}
