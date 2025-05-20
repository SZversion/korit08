package com.korit.springboot.ioc;

import org.springframework.stereotype.Component;

@Component
public class SmartPhone {
    private Battery b;
    public SmartPhone(Battery b) {
        this.b = b;
    }
    public void powerOn() {
        b.eletricitySupply();
    }
}
