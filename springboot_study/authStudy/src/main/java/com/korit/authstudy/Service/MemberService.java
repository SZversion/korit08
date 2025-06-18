package com.korit.authstudy.Service;

import com.korit.authstudy.domain.entity.Member;
import com.korit.authstudy.dto.MemberRegisterDto;
import com.korit.authstudy.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

  private final MemberRepository memberRepository;
  private final BCryptPasswordEncoder passwordEncoder;

  public Member register(MemberRegisterDto dto) {
    Member insertMember = memberRepository.save(dto.toEntity(passwordEncoder));
    return insertMember;
  }
}
