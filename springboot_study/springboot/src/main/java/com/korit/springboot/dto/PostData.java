package com.korit.springboot.dto;

import lombok.Data;

@Data
public class PostData {
    private String name;
    private Integer age;
    private Address address;
}
