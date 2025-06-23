package com.korit.authstudy.mapper;

import com.korit.authstudy.domain.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UsersMapper {

  public int updateUserInfoById(User user);

  public int updatePassword(@Param("id") Integer userId, @Param("password") String newPassword);

//  public int updateUserPasswordInfoById(User user);
}
