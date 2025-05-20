package generic;

/*
*   와일드카드 <?>의 제약 조건
*   1. extends <? extends Class>
*       이 Class를 상속받은 놈들만 사용 가능하다
*       ex) Student를 상속받는 HighStudent와 AcademyStudent가 있으면
*       <? extends Student> 하면 Student 를 상속받은 HighStudent 와 AcademyStudent 만 사용 가능
*   2. super <? super Class>
*       이 Class가 상속받고 있는 놈들만 사용 가능하다
*       ex) Student를 상속받는 HighStudent와 AcademyStudent가 있으면
*       <? super HighStudent> 하면 HighStudent 에게 상속해 주는 Student 만 사용 가능
*/
public class Main {

    public static void showAll(Repository<? extends Student> repository) {
        repository.findAll().forEach(System.out::println);
    }

    public static void main(String[] args) {
        Repository<HighStudent> hsRepo = new Repository<>();
        Repository<AcademyStudent> adRepo = new Repository<>();

        hsRepo.save(new HighStudent());
        adRepo.save(new AcademyStudent());

        hsRepo.findAll().forEach(HighStudent::printGrade);

        showAll(hsRepo);
    }
}
