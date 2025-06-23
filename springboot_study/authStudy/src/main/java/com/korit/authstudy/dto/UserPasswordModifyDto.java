package com.korit.authstudy.dto;

import com.korit.authstudy.domain.entity.User;
import lombok.Data;

@Data
public class UserPasswordModifyDto {

  private String oldPassword;
  private String newPassword;
  private String newPasswordCheck;

  public User toEntity(Integer userId, User user) {
    return User.builder()
        .id(userId)
        .username(user.getUsername())
        .password(oldPassword)
        .fullName(user.getFullName())
        .email(user.getEmail())
        .build();
  }
}
