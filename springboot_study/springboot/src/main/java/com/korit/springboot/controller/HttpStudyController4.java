package com.korit.springboot.controller;

import com.korit.springboot.dto.PostData;
import com.korit.springboot.dto.Student;
import com.korit.springboot.dto.param.SearchStudyDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/study")
public class HttpStudyController4 {
    List<Student> students = new ArrayList<>();
    Random random = new Random();
    int startCode = 0xAC00;     // 가
    int endCode = 0xD7A3;       //힇

    @GetMapping("/students/init")
    public void init() {
        Student student1 = new Student("qwer", 28);
        Student student2 = new Student("asdf", 23);
        Student student3 = new Student("zxcv", 25);
        students.add(student1);
        students.add(student2);
        students.add(student3);
    }

    @GetMapping("/students/add")
    public Object add() {
        for (int i=0; i<10000; i++) {
            StringBuilder builder = new StringBuilder();
            builder.append((char)(startCode + random.nextInt(endCode - startCode + 1)));
            builder.append((char)(startCode + random.nextInt(endCode - startCode + 1)));
            builder.append((char)(startCode + random.nextInt(endCode - startCode + 1)));
            students.add(new Student(builder.toString(), random.nextInt(99 + 1)));
//          랜덤 3글자 해서 이름, 1~100까지 나이로 해서 student 객체 50개 추가
        }

        return students;
    }

    @GetMapping("/students")
    public Object get(SearchStudyDto dto) {
        if(students.isEmpty()) {
            return "init을 먼저 실행해주세요";
        }

        if(dto.getIndex() != null && (-1 < dto.getIndex() && dto.getIndex() < students.size())) {
            return students.get(dto.getIndex());
        } else if (dto.getIndex() != null) {
            return "잘못된 입력입니다." +
                    "\n0 ~ " + (students.size()-1) + " 사이의 숫자를 입력하세요";
        }

        List<Student> foundStudent = students;
        if(dto.getSearchValue() != null && !dto.getSearchValue().isBlank()) {
            foundStudent = students.stream()
                    .filter(s -> s.getName().contains(dto.getSearchValue()))
                    .collect(Collectors.toList());
        }

        if(dto.getPage() != null && dto.getPage() > 0)
            dto.setPage(1);
        int startIndex = (dto.getPage() - 1) * dto.getCount();
        List<Student> studentPage = new ArrayList<>();
        for(int i = 0; i < (foundStudent.size() < dto.getCount() ? foundStudent.size() : dto.getCount()); i++) {
            try {
                studentPage.add(foundStudent.get(startIndex + i));
            } catch (RuntimeException e) {
                throw new RuntimeException(e);
            }
        }

        return studentPage;
    }

    @PostMapping("/students")
    public Object post(@RequestBody PostData postData) {
        if(students == null) {
            return "init을 먼저 실행해주세요";
        }

        Student student = new Student(postData.getName(), postData.getAge());
        students.add(student);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequestUri()
                .path("")
                .build()
                .toUri();

        Map<String, Object> resp = new HashMap<>();
        resp.put("status", ResponseEntity.created(location).build().getStatusCodeValue());
        resp.put("input data", student);
        resp.put("data", students);

        return resp;
    }

    @DeleteMapping("/students/clear/{category}/{id}")
    public void clear(@PathVariable String category, @PathVariable Long id) {
        students.clear();
    }
}
