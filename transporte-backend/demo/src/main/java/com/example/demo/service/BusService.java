// Ubicación: src/main/java/com/example/demo/service/BusService.java
package com.example.demo.service;

import com.example.demo.model.Bus;
import com.example.demo.model.Ruta;
import com.example.demo.repository.BusRepository;
import com.example.demo.repository.ConductorRepository;
import com.example.demo.repository.RutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private ConductorRepository conductorRepository;

    @Autowired
    private RutaRepository rutaRepository;

    // Obtener todos los buses
    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    // Obtener bus por ID
    public Optional<Bus> getBusById(Long id) {
        return busRepository.findById(id);
    }

    // Guardar o actualizar un bus
    public Bus saveBus(Bus bus) {
        return busRepository.save(bus);
    }

    // Actualizar un bus
    public Bus updateBus(Long id, Bus updatedBus) {
        Bus existingBus = busRepository.findById(id).orElseThrow(() -> new RuntimeException("Bus no encontrado"));
        
        existingBus.setPlaca(updatedBus.getPlaca());
        existingBus.setModelo(updatedBus.getModelo());
        
        return busRepository.save(existingBus);
    }

    // Eliminar un bus (solo si no tiene conductores asignados)
    public void deleteBus(Long busId) {
        boolean hasConductores = conductorRepository.existsByBuses_Id(busId);
        if (hasConductores) {
            throw new RuntimeException("No se puede eliminar un bus con conductores asignados.");
        }
        busRepository.deleteById(busId);
    }

    // Asignar una ruta a un bus con días específicos
    public Bus asignarRuta(Long busId, Long rutaId, List<String> diasAsignacion) {
        Bus bus = busRepository.findById(busId).orElseThrow(() -> new RuntimeException("Bus no encontrado"));
        Ruta ruta = rutaRepository.findById(rutaId).orElseThrow(() -> new RuntimeException("Ruta no encontrada"));

        bus.getRutas().add(ruta);
        bus.getDiasAsignacionRuta().put(rutaId, diasAsignacion);

        return busRepository.save(bus);
    }
}
