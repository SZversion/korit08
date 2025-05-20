package oop;

public class BasicUserRepository implements UserRepository{
    @Override
    public void insert() {
        System.out.println("기본 사용자 데이터베이스에 추가");
    }
}