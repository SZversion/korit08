package com.korit.springboot.ioc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class SmartPhone {

    private Battery b;

    public SmartPhone(@Qualifier("samsungBattery") Battery b) {
        this.b = b;
    }
    public void powerOn() {
        b.eletricitySupply();
    }
}
