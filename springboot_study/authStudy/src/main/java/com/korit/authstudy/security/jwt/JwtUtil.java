package com.korit.authstudy.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.JwtParserBuilder;
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
    // 입력된 정보를 사용해 문자열 JWT 토큰 생성 (암호화 된 토큰)
    return jwtBuilder.compact();
  }

  public boolean isBearer(String token) {
    if (token == null) {
      return false;
    }
    if (!token.startsWith("Bearer ")) {
      return false;
    }
    return true;
  }

  public String removeBearer(String token) {
    return token.replaceFirst("Bearer ", "");
  }

  public Claims getClaims(String token) {
    JwtParserBuilder jwtParserBuilder = Jwts.parser();
    jwtParserBuilder.setSigningKey(KEY);
    JwtParser jwtParser = jwtParserBuilder.build(); // generateAccessToken 에서 암호화 된 토큰을 복호화 하는 과정
    return jwtParser
      .parseClaimsJws(token)
      .getPayload();  // generateAccessToken 에서 만들어진 토큰이라면 복호화 했을때 원래 넣어놨던 PayLoad 값을 받을 수 있다 혹은 기간이 만료되었거나

//  return Jwts.parser().setSigningKey(KEY).build().parseClaimsJws(token).getPayload();
//  위에랑 같은거

//  return Jwts.parser()
//      .setSigningKey(KEY)
//      .build()
//      .parseClaimsJws(token)
//      .getPayload(); 위랑 같은거
  }
}
