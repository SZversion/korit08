package com.korit.springboot.controller;

import com.korit.springboot.ioc.SmartPhone;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
    Component의 종류
    1. @Component       ->  특정 기능이 정해져 있지 않은 객체
    2. @Controller      ->  HTTP 요청 및 응답을 처리하는 객체
    3. @Service         ->  비즈니스 로직 또는 메인로직을 담당하는 객체
    4. @Repository      ->  DB와 관련된 로직을 담당하는 객체
    5. @Configuration   ->  설정 로직을 담당하는 객체 + 직접생성 후 IoC 등록을 필요로 하는 Bean 설정
*/

@RestController
@RequestMapping("/api")
public class IoCController {
    @Autowired          // 이거 만드는데 다른 부품들 필요 하니까 가져와서 만들어야돼
    SmartPhone s;

    @GetMapping("/ioc")
    public String get() {
        s.powerOn();
        return null;
    }

    @GetMapping("/ioc2")
    public String get2() {
        s.powerOn();
        return null;
    }
}