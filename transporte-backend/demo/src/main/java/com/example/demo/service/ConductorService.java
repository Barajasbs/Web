package com.example.demo.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import  java.util.List;
import com.example.demo.repository.ConductorRepository; 

import com.example.demo.model.Conductor;

@Service
public class ConductorService {
    @Autowired
    private ConductorRepository conductorRepository;

    public List<Conductor> getAllConductores() {
        return conductorRepository.findAll();
    }

    public Conductor getConductorById(Long id) {
        return conductorRepository.findById(id).orElseThrow(() -> new RuntimeException("Conductor no encontrado"));
    }

    public Conductor saveConductor(Conductor conductor) {
        return conductorRepository.save(conductor);
    }

    public Conductor updateConductor(Long id, Conductor conductor) {
        Conductor existingConductor = getConductorById(id);
        existingConductor.setNombre(conductor.getNombre());
        existingConductor.setCedula(conductor.getCedula());
        existingConductor.setTelefono(conductor.getTelefono());
        existingConductor.setDireccion(conductor.getDireccion());
        return conductorRepository.save(existingConductor);
    }

    public void deleteConductor(Long id) {
        Conductor conductor = getConductorById(id);
        if (!conductor.getBuses().isEmpty()) {
            throw new RuntimeException("No se puede eliminar un conductor con buses asignados");
        }
        conductorRepository.deleteById(id);
    }
    public Conductor asignarBus(Long conductorId, Long busId, List<String> dias) {
        Conductor conductor = conductorRepository.findById(conductorId)
                .orElseThrow(() -> new RuntimeException("Conductor no encontrado"));

        conductor.getDiasAsignacionBus().put(busId, dias); // Asigna el bus y los días al conductor
        return conductorRepository.save(conductor);
    }
}
