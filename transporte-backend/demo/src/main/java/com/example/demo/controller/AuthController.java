// Ubicación: src/main/java/com/example/demo/controller/AuthController.java
package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user, HttpSession session) {
        User validUser = userService.validateUser(user.getUsername(), user.getPassword());
        if (validUser != null) {
            // Si las credenciales son válidas, guarda la información de sesión
            session.setAttribute("userRole", validUser.getRole());
            return "{\"role\": \"" + validUser.getRole() + "\"}"; // Devuelve el rol del usuario
        }
        return "Credenciales incorrectas";
    }

    @PostMapping("/logout")
    public String logout(HttpSession session) {
        // Invalida la sesión del usuario para cerrar sesión
        session.invalidate();
        return "Sesión cerrada exitosamente";
    }
}
