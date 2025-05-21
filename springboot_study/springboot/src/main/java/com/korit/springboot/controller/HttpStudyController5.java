package com.korit.springboot.controller;

/*
*
*/

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class HttpStudyController5 {

    @GetMapping("/study/http/get")
    public ResponseEntity<Map<String, Object>> get() {
//        return new ResponseEntity<>(Map.of("name", "asdf", "age", 32), HttpStatus.OK);
        return ResponseEntity.badRequest().body(Map.of("name", "asdf", "age", 32));
    }
}