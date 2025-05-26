package com.korit.springboot.controller.clinic;

import com.korit.springboot.domain.entity.DepartmentEntity;
import com.korit.springboot.repository.DepartmentRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class DepartmentController {

    private DepartmentRepository departmentRepository;

    @PostMapping("/api/clinic/department")
    public ResponseEntity<?> register(@RequestBody DepartmentEntity department) {
        System.out.println(department);
        departmentRepository.save(department);
        return ResponseEntity.ok("department 등록 완료");
    }
}
