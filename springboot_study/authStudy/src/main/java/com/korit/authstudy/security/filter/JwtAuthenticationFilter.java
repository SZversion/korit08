package com.korit.authstudy.security.filter;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import java.io.IOException;
import org.springframework.stereotype.Component;

@Component
public class JwtAuthenticationFilter implements Filter {

  @Override
  public void doFilter(
    ServletRequest servletRequest,
    ServletResponse servletResponse,
    FilterChain filterChain
  ) throws IOException, ServletException {
    System.out.println("JWT AccessToken 검사");
    filterChain.doFilter(servletRequest, servletResponse);
  }
}
