package com.korit.authstudy.filter;


import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import java.io.IOException;
import org.springframework.stereotype.Component;

@Component
public class StudyFilter implements Filter {


  @Override
  public void doFilter(
    ServletRequest servletRequest,
    ServletResponse servletResponse,
    FilterChain filterChain) throws IOException, ServletException {

    System.out.println("전처리");
    filterChain.doFilter(servletRequest, servletResponse);  // 컨트롤러 호출 부분
    System.out.println("후처리");
  }

}
