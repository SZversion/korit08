package com.korit.springboot.domain.dto;

import com.korit.springboot.domain.entity.DoctorEntity;
import lombok.Data;

@Data
public class DoctorRegisterDto {
    private String doctorName;
    private String departmentName;

    public DoctorEntity toEntity(Long departmentId) {
        return DoctorEntity.builder()
                .doctorName(doctorName)
                .doctorDepartment(departmentId)
                .build();
    }
}
