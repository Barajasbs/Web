// Ubicación: src/main/java/com/example/demo/service/RutaService.java
package com.example.demo.service;

import com.example.demo.model.Ruta;
import com.example.demo.repository.BusRepository;
import com.example.demo.repository.RutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RutaService {

    @Autowired
    private RutaRepository rutaRepository;

    @Autowired
    private BusRepository busRepository;

    // Obtener todas las rutas
    public List<Ruta> getAllRutas() {
        return rutaRepository.findAll();
    }

    // Obtener ruta por ID
    public Optional<Ruta> getRutaById(Long id) {
        return rutaRepository.findById(id);
    }

    // Guardar o actualizar una ruta
    public Ruta saveRuta(Ruta ruta) {
        return rutaRepository.save(ruta);
    }

    // Actualizar una ruta
    public Ruta updateRuta(Long id, Ruta updatedRuta) {
        Ruta existingRuta = rutaRepository.findById(id).orElseThrow(() -> new RuntimeException("Ruta no encontrada"));

        existingRuta.setCodigo(updatedRuta.getCodigo());
        existingRuta.setEstaciones(updatedRuta.getEstaciones());
        existingRuta.setHorario(updatedRuta.getHorario());

        return rutaRepository.save(existingRuta);
    }

    // Eliminar una ruta (solo si no tiene buses asignados)
    public void deleteRuta(Long rutaId) {
        boolean hasBuses = busRepository.existsByRutas_Id(rutaId);
        if (hasBuses) {
            throw new RuntimeException("No se puede eliminar una ruta asignada a buses.");
        }
        rutaRepository.deleteById(rutaId);
    }
}
