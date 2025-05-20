package com.korit.springboot.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/*
    HttpServletRequest 객체란?
    외부에서 Tomcat 웹 서버로 요청시 생성되는 요청정보객체이다.
*/

@RestController
@RequestMapping("/api")
public class HttpServletRequestController {

    @GetMapping("/name2")
    public String getName(
            @RequestParam(required = false) String a,
            @RequestParam(required = false) int b
    ) {
        System.out.println(a);
        System.out.println(b+10);
        return "name : " + a + ", age : " + b;
    }
}
