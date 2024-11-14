// Ubicación: src/main/java/com/example/demo/config/AuthFilter.java
package com.example.demo.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;

public class AuthFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpSession session = req.getSession(false);  // Revisa si ya existe una sesión activa

        if (session == null || session.getAttribute("userRole") == null) {
            // Si no existe sesión o el rol no está presente, devuelve error 401
            ((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Usuario no autenticado");
        } else {
            // Si la sesión es válida, permite que la solicitud continúe
            chain.doFilter(request, response);
        }
    }
}
