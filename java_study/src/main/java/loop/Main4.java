package loop;

import java.util.*;

public class Main4 {
    public static void main(String[] args) {
        //높은점수출력
        List<Student> students = List.of(
                new Student("김준일", 80),
                new Student("김준일", 94),
                new Student("김준일", 75),
                new Student("김준일", 99),
                new Student("김준일", 85)
        );

//        int max = 0;
//        for(int i=0; i<students.size(); i++) {
//            if (max < students.get(i).getScore())
//                max = students.get(i).getScore();
//        }

        Student max = students.stream()
                .max(Comparator.comparing(Student::getScore))
                .orElseThrow(NoSuchElementException::new);

        System.out.println(
                students.stream()
                        .sorted(Comparator.comparing(Student::getScore))
                        .toList()
                        .getLast()
                        .getScore()
        );
        System.out.println(max.getScore());
    }
}
