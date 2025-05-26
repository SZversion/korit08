package com.korit.springboot.mapper.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/*
    Mybatis를 사용해서 데이터를 관리 할 때 사용될 Entity 객체
    모든 Mapper의 DTO는 DB의 테이블 구조와 동일하게 작성한다
*/
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Visit{
    private Long clinicId;
    private Long patientId;
    private Long departmentId;
    private Long doctorId;
    private Long treatmentId;
    private LocalDateTime visitDate;
    private Integer fee;
}
