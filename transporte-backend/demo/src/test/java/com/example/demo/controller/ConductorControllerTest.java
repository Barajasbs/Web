package com.example.demo.controller;

import com.example.demo.model.Conductor;
import com.example.demo.service.ConductorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;
@WebMvcTest(controllers = ConductorController.class)
@ContextConfiguration(classes = {ConductorController.class}) // Configuración explícita del contexto
@Import({ConductorService.class}) // Importa los servicios necesarios
public class ConductorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ConductorService conductorService;

    @Test
    public void testObtenerConductores() throws Exception {
        // Simula un conductor
        Conductor conductor = new Conductor();
        conductor.setId(1L);
        conductor.setNombre("Juan");

        when(conductorService.getAllConductores()).thenReturn(List.of(conductor));

        // Simula una solicitud GET con un usuario autorizado
        mockMvc.perform(get("/api/conductores")
                .header("Authorization", "Bearer dummy-token"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nombre").value("Juan"));
    }

    @Test
    public void testAccesoNoAutorizado() throws Exception {
        // Simula una solicitud GET sin token de autorización
        mockMvc.perform(MockMvcRequestBuilders.get("/api/conductores"))
            .andExpect(status().isUnauthorized());
    }
    @Test
public void testAccesoAutorizado() throws Exception {
    Conductor conductor = new Conductor();
    conductor.setId(1L);
    conductor.setNombre("Juan");

    when(conductorService.getAllConductores()).thenReturn(List.of(conductor));

    // Simula una solicitud GET con un encabezado de autorización válido
    mockMvc.perform(MockMvcRequestBuilders.get("/api/conductores")
            .header("Authorization", "Bearer valid-token"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].nombre").value("Juan"));
}

}
