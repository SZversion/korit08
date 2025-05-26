package com.korit.springboot.domain.visit;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "clinic_tb")
public class Visit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clinic_id")
    private Integer id;

    private Long patientId;
    private Long departmentId;
    private Long doctorId;
    private Long treatmentId;
    private LocalDateTime visitDate;
    private Integer fee;
}
