package oop;

public class BasicUserService {
    private UserRepository userRepository;

    /*
     *  UserRepository userRepository1 = new BasicUserRepository();
     *  BasicUserRepository userRepository2 = (BasicUserRepository)userRepository1;
     *   똑같은거
     *   double num = new int 10;
     *   int num2 = (int)num;
     *
     *   double(실수)은 int(정수)보다 상위 개념 (상위 클래스) 이므로 int 값을 double에 대입 할 수 있다.
     *   하지만 double을 int에 대입 하려면 'int형 아닌고 double 인거 아는데 그냥 int로 변환해서 넣어라' 라고 말해줘야 넣을수있다.
     *
     *   Machine something1 = new Computer();
     *   Phone something2 = (Phone)something1;
     *   컴퓨터를 기계로 추상화 해서 기계로 업캐스팅이 가능하지만
     *   그 기계를 다시 핸드폰으로 다운캐스팅하지는 못한다
     *   같은 기계이기는 해도 서로 다른거니까
     */
    public BasicUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void addUser() {
        System.out.println("기본 사용자 추가");
        userRepository.insert();
    }
}