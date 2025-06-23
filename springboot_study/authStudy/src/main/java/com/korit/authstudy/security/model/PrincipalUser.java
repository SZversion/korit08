package com.korit.authstudy.security.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Collection;
import java.util.List;
import lombok.Builder;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@Builder
public class PrincipalUser implements UserDetails {

  private Integer userId;
  private String username;
  @JsonIgnore
  private String password;
  private String fullName;
  private String email;

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of();
  }
}
