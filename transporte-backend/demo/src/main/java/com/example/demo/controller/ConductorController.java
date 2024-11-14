package com.example.demo.controller;

import com.example.demo.model.Conductor;
import com.example.demo.service.ConductorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/conductores")
@CrossOrigin(origins = "http://localhost:4200")
public class ConductorController {

    @Autowired
    private ConductorService conductorService;

    @GetMapping
    public List<Conductor> getAllConductores() {
        return conductorService.getAllConductores();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Conductor> getConductorById(@PathVariable Long id) {
        Conductor conductor = conductorService.getConductorById(id);
        return ResponseEntity.ok(conductor);
    }

    @PostMapping
    public ResponseEntity<Conductor> createConductor(@RequestBody Conductor conductor) {
        Conductor newConductor = conductorService.saveConductor(conductor);
        return ResponseEntity.ok(newConductor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Conductor> updateConductor(@PathVariable Long id, @RequestBody Conductor conductor) {
        Conductor updatedConductor = conductorService.updateConductor(id, conductor);
        return ResponseEntity.ok(updatedConductor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteConductor(@PathVariable Long id) {
        conductorService.deleteConductor(id);
        return ResponseEntity.ok().build();
    }
    public ResponseEntity<Conductor> asignarBus(@PathVariable Long id, @RequestBody Map<String, Object> asignacionData) {
        Long busId = Long.parseLong(asignacionData.get("busId").toString());
        List<String> dias = (List<String>) asignacionData.get("dias");

        Conductor conductorActualizado = conductorService.asignarBus(id, busId, dias);
        return ResponseEntity.ok(conductorActualizado);
    }
}