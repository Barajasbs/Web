package com.example.demo.model;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;

import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

import jakarta.persistence.GenerationType;


@Entity
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String placa;
    private String modelo;

    @ManyToMany(mappedBy = "buses")
    private List<Conductor> conductores = new ArrayList<>();

    @ElementCollection
    private Map<Long, List<String>> diasAsignacionRuta = new HashMap<>();

    public Map<Long, List<String>> getDiasAsignacionRuta() {
        return diasAsignacionRuta;
    }

    public void setDiasAsignacionRuta(Map<Long, List<String>> diasAsignacionRuta) {
        this.diasAsignacionRuta = diasAsignacionRuta;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public List<Conductor> getConductores() {
        return conductores;
    }

    public void setConductores(List<Conductor> conductores) {
        this.conductores = conductores;
    }
    

    // Getters y Setters
}
