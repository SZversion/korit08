package com.korit.springboot.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "doctor_tb")
public class DoctorEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long doctor_id;
    private String doctorName;
    private Long doctorDepartment;
}
