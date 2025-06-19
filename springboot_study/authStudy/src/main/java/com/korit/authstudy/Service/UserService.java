package com.korit.authstudy.Service;

import com.korit.authstudy.domain.entity.User;
import com.korit.authstudy.dto.JwtDto;
import com.korit.authstudy.dto.LoginDto;
import com.korit.authstudy.dto.UserRegisterDto;
import com.korit.authstudy.repository.UsersRepository;
import com.korit.authstudy.security.jwt.JwtUtil;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

  private final BCryptPasswordEncoder passwordEncoder;
  private final UsersRepository usersRepository;
  private final JwtUtil jwtUtil;

  public User register(UserRegisterDto dto) {
    return usersRepository.save(dto.toEntity(passwordEncoder));
  }

  public JwtDto login(LoginDto dto) {
    List<User> foundUsers = usersRepository.findByUsername(dto.getUsername());

    if (foundUsers.isEmpty()) {
      throw new UsernameNotFoundException("아이디가 없습니다");
    }

    User user = foundUsers.get(0);
    if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
      throw new BadCredentialsException("비밀번호가 틀렸습니다");
    }

    String token = jwtUtil.generateAccessToken(user.getId().toString());
    System.out.println("로그인 토큰 생성");

    return JwtDto.builder()
      .accessToken(token)
      .build();
  }
}
