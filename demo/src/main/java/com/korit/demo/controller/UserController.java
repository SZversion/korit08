package com.korit.demo.controller;

import com.korit.demo.entity.User;
import com.korit.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/users")
    public ResponseEntity<User> register(@RequestBody Map<String, String> dto) {
        User user = new User();
        user.setUsername(dto.get("username"));
        user.setPassword(dto.get("password"));
        return ResponseEntity.ok(userService.register(user));
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUserAll() {
        return ResponseEntity.ok(userService.findUsersAll());
    }
}