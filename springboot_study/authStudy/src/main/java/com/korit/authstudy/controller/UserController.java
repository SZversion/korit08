package com.korit.authstudy.controller;

import com.korit.authstudy.Service.UserService;
import com.korit.authstudy.dto.JwtDto;
import com.korit.authstudy.dto.LoginDto;
import com.korit.authstudy.dto.UserRegisterDto;
import com.korit.authstudy.security.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;
  private final JwtService jwtService;

  @PostMapping
  public ResponseEntity<?> registerUser(@RequestBody UserRegisterDto dto) {
    log.info("DTO: {}", dto);
    return ResponseEntity.ok(userService.register(dto));
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody LoginDto dto) {
    JwtDto jwtDto = userService.login(dto);

    if (jwtDto == null) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("사용자 정보를 다시 확인하세요");
    }

    System.out.println("로그인 컨트롤러 호출");
    return ResponseEntity.ok(jwtDto);
  }

  @GetMapping("/login/status")
  public ResponseEntity<?> getLoginStatus(@RequestHeader("Authorization") String authorization) {
    return ResponseEntity.ok(jwtService.validLoginAccessToken(authorization));
  }
}
