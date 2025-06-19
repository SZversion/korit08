package com.korit.authstudy.controller;

import com.korit.authstudy.exception.BearerValidException;
import io.jsonwebtoken.JwtException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerAdvice {

  @ExceptionHandler(AuthenticationException.class)
  public ResponseEntity<?> unAuthorized(AuthenticationException exception) {
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(exception.getMessage());
  } // 인증이 안된 접근일 때

  @ExceptionHandler(BearerValidException.class)
  public ResponseEntity<?> isNotBearer(BearerValidException exception) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
  } // 키 값이 잘못 됐을 때

  @ExceptionHandler(JwtException.class)
  public ResponseEntity<?> jwtError(JwtException exception) {
    return ResponseEntity.status(HttpStatus.FORBIDDEN).body(exception.getMessage());
  } // 키 값이 위조됐거나, 만료되었을때
}
