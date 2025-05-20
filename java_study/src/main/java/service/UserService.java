package service;

import entity.User;

import java.util.*;

public class UserService<E> {
    private UserService() {}
    private static UserService userService;
    List<User> userList = new ArrayList<>();

    public static UserService getInstance() {
        if (userService == null) {
            userService = new UserService();
            return userService;
        }
        return userService;
    }

    public void register (User user) {
        userList.stream()
                .filter(u -> u.getUsername().equals(user.getUsername()))
                .findAny()
                .ifPresentOrElse(
                        u -> System.out.println(user.getUsername() + "중복 시 추가 불가"),
                        () -> userList.add(user)
                );
    }

    public void printAll() {
        userList.forEach(System.out::println);
    }

    public void printByUsername(String username) {
        userList.stream()
                .filter(u -> u.getUsername().equals(username))
                .findAny()
                .ifPresentOrElse(
                        System.out::println,
                        () -> System.out.println("no data")
                );
    }
}
