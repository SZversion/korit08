package com.korit.springboot.ioc;

import org.springframework.stereotype.Component;

@Component
public class LgBattery implements Battery{

    @Override
    public void eletricitySupply() {
        System.out.println("LG 배터리로 전류를 공급합니다.");
    }

    @Override
    public void charge() {
        System.out.println("LG 배터리를 충전합니다.");
    }
}
