package com.korit.springboot.controller;
import com.korit.springboot.ioc.SmartPhone;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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