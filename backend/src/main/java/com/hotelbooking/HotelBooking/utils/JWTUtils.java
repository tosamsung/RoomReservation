package com.hotelbooking.HotelBooking.utils;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.hotelbooking.HotelBooking.entity.User;

@Component
public class JWTUtils {
	private SecretKey secretKey;
	private static final long EXPIRATION_TIME_ACCESS_TOKEN = 15*60 * 1000;
	private static final long EXPIRATION_TIME_REFRESH_TOKEN = 5 * 24 * 60 * 60 * 1000;
	
	public JWTUtils() {
		String secreteString = "843567893696976453275974432697R634976R738467TR678T34865R6834R8763T478378637664538745673865783678548735687R3";
		byte[] keyBytes = Base64.getDecoder().decode(secreteString.getBytes(StandardCharsets.UTF_8));
		this.secretKey = new SecretKeySpec(keyBytes, "HmacSHA256");
	}
	
	public String generateAccessToken(User user) {
		return Jwts.builder()
				.subject(user.getUsername())
				.issuedAt(new Date(System.currentTimeMillis()))
				.expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME_ACCESS_TOKEN))
				.signWith(secretKey)
				.compact();
	}
	
	public String generateAccessToken(String username) {
		return Jwts.builder()
				.subject(username)
				.issuedAt(new Date(System.currentTimeMillis()))
				.expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME_ACCESS_TOKEN))
				.signWith(secretKey)
				.compact();
	}
	
	public String generateRefreshToken(HashMap<String, Object> claims, User user) {
		return Jwts.builder()
				.claims(claims)
				.subject(user.getUsername())
				.issuedAt(new Date(System.currentTimeMillis()))
				.expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME_REFRESH_TOKEN))
				.signWith(secretKey)
				.compact();
	}
	
	public <T> T extractClaims(String token, Function<Claims, T> claimsTFunction) {
		return claimsTFunction.apply(Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload());
	}
	
	public String extractUsername(String token) {
		return extractClaims(token, Claims::getSubject);
	}
	
	public Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload();
	}
	
	public void getClaimValueByName(String token, String name) {
		getAllClaimsFromToken(token).get(name);
	}
	
	public boolean isTokenValid(String token, UserDetails userDetails) {
		 String username = extractUsername(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
	
	public boolean isTokenUsernameValid(String token, UserDetails userDetails) {
		 String username = extractUsername(token);
		return (username.equals(userDetails.getUsername()));
	}
	
	public boolean isTokenExpired(String token) {
		return extractClaims(token, Claims::getExpiration).before(new Date());
	}
	
	
	
	
}
