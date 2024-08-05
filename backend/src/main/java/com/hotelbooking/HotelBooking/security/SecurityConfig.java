package com.hotelbooking.HotelBooking.security;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity,
			@Qualifier("userDetailsService") UserDetailsService userDetailsService,
			@Qualifier("adminDetailsServiceImpl") UserDetailsService adminDetailsService) throws Exception {
		httpSecurity.csrf(AbstractHttpConfigurer::disable).authorizeHttpRequests(request -> request
				.requestMatchers("/auth/**", "/public/**", "/statistics/user-register",
						"/statistics/user-register/chart", "/statistics/user-register/chart/**")
				.permitAll().requestMatchers("/business/create").permitAll().requestMatchers("/business/**")
				.hasRole("BUSINESS").requestMatchers(HttpMethod.GET, "/users/**").permitAll()
				.requestMatchers(HttpMethod.POST, "/users/**").permitAll().requestMatchers(HttpMethod.PUT, "/users/**")
				.permitAll().requestMatchers(HttpMethod.DELETE, "/users/**").permitAll().anyRequest().authenticated())
				.sessionManagement(manager -> manager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.addFilterBefore(jwtAuthFilter(), UsernamePasswordAuthenticationFilter.class);

		httpSecurity.authenticationProvider(daoAuthenticationProvider(userDetailsService));
		httpSecurity.authenticationProvider(daoAuthenticationProvider(adminDetailsService));

		return httpSecurity.build();
	}

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider(@Qualifier("userDetailsServiceImpl") UserDetailsService userDetailsService) {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public DaoAuthenticationProvider adminAuthenticationProvider( @Qualifier("adminDetailsServiceImpl") UserDetailsService adminDetailsService) {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(adminDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    @Primary
    public AuthenticationManager userAuthenticationManager(
            @Qualifier("userDetailsServiceImpl") UserDetailsService userDetailsService) throws Exception {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return new ProviderManager(provider);
    }

    @Bean
    public AuthenticationManager adminAuthenticationManager(
            @Qualifier("adminDetailsServiceImpl") UserDetailsService adminDetailsService) throws Exception {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(adminDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return new ProviderManager(provider);
    }
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	public JWTAuthFilter jwtAuthFilter() {
		return new JWTAuthFilter();
	}
}
