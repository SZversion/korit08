package com.korit.authstudy.controller;

import com.korit.authstudy.Service.MemberService;
import com.korit.authstudy.dto.MemberRegisterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

  private final MemberService memberService;

  @PostMapping
  public ResponseEntity<?> registerMember(@RequestBody MemberRegisterDto dto) {
    return ResponseEntity.ok(memberService.register(dto));
  }
}
