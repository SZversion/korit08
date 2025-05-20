package com.korit.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HttpStudyController {

    @GetMapping("/http")
//    @ResponseBody   데이터로 응답하겠다, ViewResolver를 거치지 않겠다, 없으면 파일경로로 응답하겠다는 뜻
    public String get() {
        return "";
    }

    @GetMapping("/name")
    public String getName() {
        return "qwer";
    }
}