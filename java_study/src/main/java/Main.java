import entity.User;
import service.UserService;

public class Main {

    public static void main(String[] args) {
        UserService userService = UserService.getInstance();

        User user1 = new User(
                "김일",
                1234,
                "김일",
                "1234@test.com",
                "01012345678",
                "부산",
                21,
                "학생");
        User user2 = new User(
                "김일",
                1234,
                "김일",
                "1234@test.com",
                "01012345678",
                "부산",
                21,
                "학생");
        User user3 = new User(
                "김삼",
                7894,
                "김삼",
                "3333@test.com",
                "01012345678",
                "부산",
                25,
                "학생");

        userService.register(user1);
        userService.register(user2);
        userService.register(user3);
        userService.printAll();
        userService.printByUsername("김삼");
    }
}
