package com.korit.springboot.dto.param;

import lombok.Data;

@Data
public class SearchStudyDto {
    private String searchValue;
    private Integer page = 1;
    private Integer count = 10;
    private Integer index;
}
