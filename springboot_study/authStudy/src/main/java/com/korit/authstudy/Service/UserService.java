package com.korit.authstudy.Service;

import com.korit.authstudy.domain.entity.User;
import com.korit.authstudy.dto.JwtDto;
import com.korit.authstudy.dto.LoginDto;
import com.korit.authstudy.dto.UserModifyDto;
import com.korit.authstudy.dto.UserPasswordModifyDto;
import com.korit.authstudy.dto.UserRegisterDto;
import com.korit.authstudy.mapper.UsersMapper;
import com.korit.authstudy.repository.UsersRepository;
import com.korit.authstudy.security.jwt.JwtUtil;
import com.korit.authstudy.security.model.PrincipalUser;
import jakarta.transaction.Transactional;
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
  private final UsersMapper usersMapper;
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

  @Transactional(rollbackOn = Exception.class)
  public void modifyUserInfo(Integer userId, UserModifyDto dto) {
    // 둘 다 같은거임
//    usersRepository.updateUserInfoById(dto.toEntity(userId));
    int updateCount = usersMapper.updateUserInfoById(dto.toEntity(userId));
//    System.out.println(updateCount);
  }

  @Transactional(rollbackOn = Exception.class)
  public void modifyPasswordInfo(UserPasswordModifyDto dto, PrincipalUser user) {
    // 1. 현재 로그인 되어있는 비밀번호와 요청때 받은 현재 비밀번호가 일치하는지 확인
    if (!passwordEncoder.matches(dto.getOldPassword(), user.getPassword())) {
      throw new BadCredentialsException("현재 비밀번호가 일치하지 않습니다.");
    }
    System.out.println("현재 비밀번호 일치");
    // 2. 새 비밀번호와 새 비밀번호 확인이 일치하는지
    if (!dto.getNewPassword().equals(dto.getNewPasswordCheck())) {
      throw new BadCredentialsException("새 비밀번호가 일치하지 않습니다.");
    }
    System.out.println("새 비밀번호 일치");
    if (passwordEncoder.matches(dto.getNewPassword(), user.getPassword())) {
      throw new BadCredentialsException("현재 비밀번호와 바꾸려는 비밀번호가 일치합니다.");
    }

    usersMapper.updatePassword(user.getUserId(), passwordEncoder.encode(dto.getNewPassword()));
  }
}
