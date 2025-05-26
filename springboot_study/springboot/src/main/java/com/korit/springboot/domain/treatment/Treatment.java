package com.korit.springboot.domain.treatment;

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
@Table(name = "treatment_tb")
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // = AutoIncrement
    // DB는 대소문자 구분 X
    private Integer treatment_id;

    private String treatmentName;
}
