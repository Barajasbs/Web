package com.example.demo.model;

import jakarta.persistence.*;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

@Entity
public class Conductor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String cedula;
    private String telefono;
    private String direccion;

    // Relación ManyToMany para los buses asignados
    @ManyToMany
    @JoinTable(
        name = "conductor_bus",
        joinColumns = @JoinColumn(name = "conductor_id"),
        inverseJoinColumns = @JoinColumn(name = "bus_id")
    )
    private List<Bus> buses = new ArrayList<>();

    // Relación con días asignados a buses
    @ElementCollection
    @CollectionTable(name = "dias_asignacion_bus", joinColumns = @JoinColumn(name = "conductor_id"))
    @MapKeyColumn(name = "bus_id")
    @Column(name = "dia_asignado")
    private Map<Long, String> diasAsignacionBus = new HashMap<>();

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public List<Bus> getBuses() {
        return buses;
    }

    public void setBuses(List<Bus> buses) {
        this.buses = buses;
    }

    public Map<Long, String> getDiasAsignacionBus() {
        return diasAsignacionBus;
    }

    public void setDiasAsignacionBus(Map<Long, String> diasAsignacionBus) {
        this.diasAsignacionBus = diasAsignacionBus;
    }
}
