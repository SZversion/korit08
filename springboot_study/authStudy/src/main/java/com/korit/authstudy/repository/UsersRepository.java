package com.korit.authstudy.repository;

import com.korit.authstudy.domain.entity.User;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UsersRepository extends JpaRepository<User, Integer> {

  List<User> findByUsername(String username);


  //JPQL (jpa sql)
  @Query(value = """
    update User
    set fullName = :#{#user.fullName}, email = :#{#user.email}
    where id = :#{#user.id}
    """)
  // 쿼리 실행 후 버퍼 비우기
  @Modifying(clearAutomatically = true)
  int updateUserInfoById(@Param("user") User user);
}
