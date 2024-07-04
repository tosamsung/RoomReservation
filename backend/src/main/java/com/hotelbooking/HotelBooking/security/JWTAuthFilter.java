package com.hotelbooking.HotelBooking.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.hotelbooking.HotelBooking.utils.CookieUtils;
import com.hotelbooking.HotelBooking.utils.JWTUtils;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JWTAuthFilter extends OncePerRequestFilter {

    @Autowired
    private JWTUtils jwtUtils;

    @Autowired
    private UserDetailsService detailsService;

    private static final String AUTH_PATH = "/auth/";
    private static final String VALIDATE_PATH = "/auth/validate";
    private static final String CONTENT_TYPE_JSON = "application/json";
    private static final String ENCODING_UTF8 = "UTF-8";
    private static final String ERROR_TOKEN_NOT_FOUND = "{\"statusCode\": 401, \"error\": \"Refresh\"}";
    private static final String ERROR_TOKEN_EXPIRED = "{\"statusCode\": 401, \"error\": \"Refresh\"}";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String requestURI = request.getRequestURI();

        // Skip filter for specific auth paths
        if (requestURI.startsWith(AUTH_PATH) && !requestURI.equals(VALIDATE_PATH)) {
            filterChain.doFilter(request, response);
            return;
        }

        String accessToken = CookieUtils.getCookieValueByName(request, "accessToken");

        // Handle missing access token
        if (accessToken == null || accessToken.isBlank()) {
            writeErrorResponse(response, ERROR_TOKEN_NOT_FOUND);
            return;
        }

        try {
            String userName = jwtUtils.extractUsername(accessToken);

            if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = detailsService.loadUserByUsername(userName);

                if (jwtUtils.isTokenValid(accessToken, userDetails)) {
                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            }

            filterChain.doFilter(request, response);
        } catch (ExpiredJwtException e) {
            writeErrorResponse(response, ERROR_TOKEN_EXPIRED);
        }
    }

    private void writeErrorResponse(HttpServletResponse response, String errorMessage) throws IOException {
        response.setContentType(CONTENT_TYPE_JSON);
        response.setCharacterEncoding(ENCODING_UTF8);
        response.getWriter().write(errorMessage);
    }
}

