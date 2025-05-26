package com.korit.springboot.controller.clinic;

import com.korit.springboot.domain.visit.Visit;
import com.korit.springboot.domain.visit.VisitRepository;
import com.korit.springboot.dto.clinic.VisitRegisterDto;
import com.korit.springboot.mapper.VisitMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api")
@AllArgsConstructor
public class VisitController {

    private VisitMapper visitMapper;
    // mybatis는 무조건 component로 등록됨
    private VisitRepository visitRepository;

    @PostMapping("/clinic/visit")
    public ResponseEntity<?> register(@RequestBody VisitRegisterDto visitRegisterDto) {
        System.out.println(visitRegisterDto);
//        visitMapper.insert(visitRegisterDto.toEntity());
        visitRepository.save(visitRegisterDto.toEntity());
        return ResponseEntity.ok("응답");
    }
}