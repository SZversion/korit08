package com.korit.springboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HttpStudyController2 {

    @GetMapping("/age")
    public Map<String, Object> getAge() {
        Map<String, Object> account = new HashMap<>();
        account.put("name", "asdf");
        account.put("age", 32);

        return account;
    }

    @GetMapping("/names")
    public List<String> getNames() {
        List<String> names = List.of("qwer", "asdf", "zxcv");

        return names;
    }

    @GetMapping("/students")
    public List<Map<String, Object>> getStudents() {
        Map<String, Object> student1 = new HashMap<>();
        student1.put("name", "asdf");
        student1.put("age", 32);
        Map<String, Object> student2 = new HashMap<>();
        student2.put("name", "qwer");
        student2.put("age", 23);
        List<Map<String, Object>> students = List.of(student1, student2);

        return students;
    }

    @GetMapping("/students2")
    public List<Map<String, Object>> getStudents2() {
        Map<String, Object> student1 = new HashMap<>();
        student1.put("name", "asdf");
        student1.put("age", 32);
        student1.put("hobby", List.of("축구", "농구"));
        Map<String, Object> student2 = new HashMap<>();
        student2.put("name", "qwer");
        student2.put("age", 23);
        student2.put("hobby", List.of("낚시", "골프"));
        List<Map<String, Object>> students = List.of(student1, student2);

        return students;
    }
}