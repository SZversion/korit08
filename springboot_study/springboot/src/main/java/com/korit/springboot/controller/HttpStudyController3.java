package com.korit.springboot.controller;

import com.korit.springboot.dto.PostData;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class HttpStudyController3 {

/*
    주소에 값을 입력한다
    파라미터를 통해 값을 입력한다
    파라미터는 주소의 ? 뒤에 따라오는 key value 를 의미한다, 여러개 요청 시 & 로 구분
    ex) http://localhost:8081/api/name2?name=qwer&age=20
 */
    @GetMapping("/study/get")
    public String get() {
        return "get request";
    }

/*
    가능한 json 으로 값을 입력한다
    ex)
    "{
        "key1" : "value1",
        "key2" : "value2",
        "key3" : {
                key4 : value3,
                key5 : ["a", "b", "c"]
        }
    }"
*/
    @PostMapping("/study/post")
    public String post(@RequestBody Map<String, Object> data) {
//        post 응답을 받으려면 @RequestBody 필수
        System.out.println(data);
        System.out.println(data.get("address"));
        System.out.println(((Map<String, Object>)data.get("address")).get("city"));
        return "post request";
    }

    @PostMapping("/study/post2")
    public String post2(@RequestBody PostData postData) {
        System.out.println(postData);
        System.out.println(postData.getAddress().getAddress1());
        return "post2 request";
    }

//    json 으로 값을 입력한다
    @PutMapping("/study/put")
    public String put() {
        return "put request";
    }

//    경로에 값을 입력한다
    @DeleteMapping("/study/delete")
    public String delete() {
        return "delete request";
    }
}
