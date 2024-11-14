// Ubicación: src/main/java/com/example/demo/config/AuthorizationFilter.java
package com.example.demo.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;

public class AuthorizationFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpSession session = req.getSession(false);
        String role = (String) session.getAttribute("userRole");
        String path = req.getRequestURI();

        // Verifica que el usuario tenga el rol adecuado para acceder a la ruta solicitada
        if (role != null) {
            if (role.equals("ADMINISTRADOR_RUTAS") && path.contains("/rutas")) {
                chain.doFilter(request, response);
            } else if (role.equals("COORDINADOR") && (path.contains("/conductores") || path.contains("/buses"))) {
                chain.doFilter(request, response);
            } else if (role.equals("PASAJERO") && path.contains("/rutas/view")) {
                chain.doFilter(request, response);
            } else {
                ((HttpServletResponse) response).sendError(HttpServletResponse.SC_FORBIDDEN, "Acceso denegado");
            }
        } else {
            ((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Usuario no autorizado");
        }
    }
}
