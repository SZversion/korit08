package com.korit.authstudy.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "members_tb")
public class Member {

  // @Builder 는 @AllArgsConstructor 반드시 있어야됨
  // @Entity 는 @NoArgsConstructor 반드시 있어야됨

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "member_id")
  private Integer id;

  private String membername;
  private String password;
  private String name;
  private String email;
}
