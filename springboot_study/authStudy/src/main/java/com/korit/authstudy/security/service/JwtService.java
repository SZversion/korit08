package com.korit.authstudy.security.service;

import com.korit.authstudy.dto.LoginStatusDto;
import com.korit.authstudy.exception.BearerValidException;
import com.korit.authstudy.security.jwt.JwtUtil;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtService {

  private final JwtUtil jwtUtil;

  public LoginStatusDto validLoginAccessToken(String bearerToken) {
    if (!jwtUtil.isBearer(bearerToken)) {
      throw new BearerValidException();
    }
    String accessToken = jwtUtil.removeBearer(bearerToken);
    Claims claims = jwtUtil.getClaims(accessToken);
    Integer userId = Integer.parseInt(claims.getId());  // claims 안에 있는 아이디와 맞는 유저정보를 DB 에서 가져옴
    System.out.println(userId);

    return LoginStatusDto.builder()
      .status("success")
      .isLogin(userId != null)
      .userId(userId)
      .build();
  }
}
