// Ubicación: src/main/java/com/example/demo/model/Ruta.java
package com.example.demo.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Ruta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codigo;

    @ElementCollection
    private List<String> estaciones;

    private String horario;  // Formato sugerido: "Lunes-Viernes: 6:00-22:00, Sábado: 8:00-20:00"

    // Constructor vacío requerido por JPA
    public Ruta() {}

    // Constructor con parámetros
    public Ruta(String codigo, List<String> estaciones, String horario) {
        this.codigo = codigo;
        this.estaciones = estaciones;
        this.horario = horario;
    }

    // Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public List<String> getEstaciones() {
        return estaciones;
    }

    public void setEstaciones(List<String> estaciones) {
        this.estaciones = estaciones;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }
}
