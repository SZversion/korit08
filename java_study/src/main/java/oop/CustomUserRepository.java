package oop;

public class CustomUserRepository implements UserRepository{
    @Override
    public void insert() {
        System.out.println("커스텀 사용자 데이터베이스에 추가");
    }
}
