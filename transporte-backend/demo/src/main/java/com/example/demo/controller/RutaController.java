// Ubicación: src/main/java/com/example/demo/controller/RutaController.java
package com.example.demo.controller;

import com.example.demo.model.Ruta;
import com.example.demo.service.RutaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rutas")
public class RutaController {

    @Autowired
    private RutaService rutaService;

    // Obtener todas las rutas
    @GetMapping
    public List<Ruta> getAllRutas() {
        return rutaService.getAllRutas();
    }

    // Obtener una ruta por ID
    @GetMapping("/{id}")
    public ResponseEntity<Ruta> getRutaById(@PathVariable Long id) {
        return rutaService.getRutaById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear una nueva ruta
    @PostMapping
    public Ruta createRuta(@RequestBody Ruta ruta) {
        return rutaService.saveRuta(ruta);
    }

    // Actualizar una ruta existente
    @PutMapping("/{id}")
    public ResponseEntity<Ruta> updateRuta(@PathVariable Long id, @RequestBody Ruta ruta) {
        Ruta updatedRuta = rutaService.updateRuta(id, ruta);
        return ResponseEntity.ok(updatedRuta);
    }

    // Eliminar una ruta (solo si no tiene buses asignados)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRuta(@PathVariable Long id) {
        try {
            rutaService.deleteRuta(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}