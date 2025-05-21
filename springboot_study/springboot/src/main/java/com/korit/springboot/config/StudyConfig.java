package com.korit.springboot.config;

import com.korit.springboot.ioc.BeanStudy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudyConfig {

    /*
        @Configuration 에서는 @Bean을 붙인 함수 명이 bean 이름
        내가 직접 생성하지 않아도 자동으로 bean이 생성됨
    */
    @Bean
    public BeanStudy bean1() {
        System.out.println("bean 생성");
        return new BeanStudy();
    }
}
