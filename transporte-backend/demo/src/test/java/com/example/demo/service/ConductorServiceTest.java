package com.example.demo.service;

import com.example.demo.model.Conductor;
import com.example.demo.repository.ConductorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ConductorServiceTest {

    @Mock
    private ConductorRepository conductorRepository;

    @InjectMocks
    private ConductorService conductorService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testObtenerConductores() {
        Conductor conductor = new Conductor();
        conductor.setId(1L);
        conductor.setNombre("Juan");

        when(conductorRepository.findAll()).thenReturn(List.of(conductor));

        List<Conductor> conductores = conductorService.getAllConductores();
        assertEquals(1, conductores.size());
        assertEquals("Juan", conductores.get(0).getNombre());
    }

    @Test
    public void testCrearConductor() {
        Conductor conductor = new Conductor();
        conductor.setNombre("Ana");
        conductor.setCedula("987654321");

        when(conductorRepository.save(any(Conductor.class))).thenReturn(conductor);

        Conductor conductorGuardado = conductorService.saveConductor(conductor);
        assertEquals("Ana", conductorGuardado.getNombre());
    }
}
