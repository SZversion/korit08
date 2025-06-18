package com.korit.authstudy.secutiry.jwt;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

  private final Key KEY;

  public JwtUtil(@Value("${jwt.secret}") String secret) {
    KEY = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
  }

  public String generateAccessToken(String id) {
    JwtBuilder jwtBuilder = Jwts.builder()
      .subject("Access Token")
      .id(id)
      .expiration(
        new Date(new Date().getTime() + (1000L * 60L * 60L * 24L * 30L)))
      .signWith(KEY);               // 토큰 생성에 필요한 정보를 입력

    return jwtBuilder.compact();    // 입력된 정보로 문자열 JWT 토큰 생성
  }
}
