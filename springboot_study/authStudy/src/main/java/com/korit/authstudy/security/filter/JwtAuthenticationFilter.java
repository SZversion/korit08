package com.korit.authstudy.security.filter;

import com.korit.authstudy.domain.entity.User;
import com.korit.authstudy.repository.UsersRepository;
import com.korit.authstudy.security.jwt.JwtUtil;
import com.korit.authstudy.security.model.PrincipalUser;
import io.jsonwebtoken.Claims;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter implements Filter {

  private final JwtUtil jwtUtil;
  private final UsersRepository usersRepository;

  @Override
  public void doFilter(
    ServletRequest servletRequest,
    ServletResponse servletResponse,
    FilterChain filterChain
  ) throws IOException, ServletException {
    System.out.println("JWT AccessToken 검사");
    HttpServletRequest request = (HttpServletRequest) servletRequest;
//    해당 매소드가 아니면 그냥 다음 필터로 넘김
    List<String> method = List.of("POST", "GET", "PUT", "PATCH", "DELETE"); // option 거르기 위해서
    if (!method.contains(request.getMethod())) {  // http 매소드가 아니면 그냥 다음 필터로 넘김
      filterChain.doFilter(servletRequest, servletResponse);
      return;
    }

    // 헤더에서 Authorization(토큰 들어있는 곳) 꺼내서 토큰 확인
    String authorization = request.getHeader("Authorization");
    System.out.println("Bearer 토큰 : " + authorization);
    if (jwtUtil.isBearer(authorization)) {
      String accessToken = jwtUtil.removeBearer(authorization);
      try {
        Claims claims = jwtUtil.getClaims(accessToken);
        String id = claims.getId();
        Integer userId = Integer.parseInt(id);
        Optional<User> foundUserOptional = usersRepository.findById(userId);
        foundUserOptional.ifPresentOrElse((user) -> {
          // UserEntity를 Security 에서 인증객체로 사용할 PrincipalUser로 변환
          PrincipalUser principalUser = PrincipalUser.builder()
            .userId(user.getId())
            .username(user.getUsername())
            .password(user.getPassword())
            .fullName(user.getFullName())
            .email(user.getEmail())
            .build();
          Authentication authentication = new UsernamePasswordAuthenticationToken(
            principalUser,
            "",
            principalUser.getAuthorities()
          );

          // SecurityContextHolder 에다가 authentication 넣었다 = 로그인 됐다
          SecurityContextHolder.getContext().setAuthentication(authentication);
          System.out.println("인증 성공");
          System.out.println(authentication);
          System.out.println(authentication.getName());
        }, () -> {
          throw new AuthenticationServiceException("인증 실패");
        });
      } catch (RuntimeException e) {
        e.printStackTrace();
      }
    }
    filterChain.doFilter(servletRequest, servletResponse);
  }
}
