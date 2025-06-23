package com.korit.authstudy.controller;

import com.korit.authstudy.Service.UserService;
import com.korit.authstudy.dto.JwtDto;
import com.korit.authstudy.dto.LoginDto;
import com.korit.authstudy.dto.UserModifyDto;
import com.korit.authstudy.dto.UserPasswordModifyDto;
import com.korit.authstudy.dto.UserRegisterDto;
import com.korit.authstudy.exception.MyAccountException;
import com.korit.authstudy.security.model.PrincipalUser;
import com.korit.authstudy.security.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

  private final BCryptPasswordEncoder passwordEncoder;
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

  @GetMapping("/principal")
  public ResponseEntity<?> getPrincipalUser() {
    return ResponseEntity.ok(SecurityContextHolder.getContext().getAuthentication());
  }

  @PutMapping("/{userId}")
  public ResponseEntity<?> modifyUserInfo(@PathVariable Integer userId,
    @RequestBody UserModifyDto dto) {

    System.out.println(dto);
    userService.modifyUserInfo(userId, dto);
    return ResponseEntity.ok("변경 성공");
  }

  @PutMapping("/{userId}/password")
  public ResponseEntity<?> modifyPasswordInfo(@PathVariable Integer userId,
    @RequestBody UserPasswordModifyDto dto,
    @AuthenticationPrincipal PrincipalUser principalUser) {
    System.out.println(principalUser);

    if (!userId.equals(principalUser.getUserId())) {
      throw new MyAccountException("본인의 계정만 변경 할 수 있습니다.");
    }

    userService.modifyPasswordInfo(dto, principalUser);
    return ResponseEntity.ok("ok");
  }
}
