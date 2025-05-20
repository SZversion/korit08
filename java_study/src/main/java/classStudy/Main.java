package classStudy;

import entity.User;

import java.util.ArrayList;
import java.util.List;

class UserAndAdminRepository {
    static List<User> userList = new ArrayList<>();
    private static UserAndAdminRepository instance;
    private UserAndAdminRepository() {}

    static UserAndAdminRepository getInstance() {
        if(instance == null) {
            instance = new UserAndAdminRepository();
            return instance;
        }
        return instance;
    }

    void insert() {
        userList.add(new User());
        System.out.println("사용자 또는 관리자 정보 추가");
    }
    void delete() {
        userList.remove(new User());
        System.out.println("사용자 또는 관리자 정보 삭제");
    }

}
class UserService {
    void addUser() {
        UserAndAdminRepository.getInstance().insert();
    }

    void removeUser() {
        UserAndAdminRepository.getInstance().delete();
    }
}
class AdminService {
    void addAdmin() {
        UserAndAdminRepository.getInstance().insert();
    }

    void removeAdmin() {
        UserAndAdminRepository.getInstance().delete();
    }
}

public class Main {
    public static void main(String[] args) {
        AdminService adminService = new AdminService();
        UserService userService = new UserService();
    }
}