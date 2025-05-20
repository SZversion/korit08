package loop;

import java.util.List;

public class Main6 {
    public static void main(String[] args) {
        int avg = 0;
        List<Student> students = List.of(
                new Student("김준일", 80),
                new Student("김준이", 94),
                new Student("김준삼", 75),
                new Student("김준사", 99),
                new Student("김준오", 85)
        );

        int total = 0;
        for(Student student : students) {
            total += student.getScore();
        }

        int sum = (int)students.stream()
                .mapToInt(Student::getScore)
                .average()
                .orElse(0);

        System.out.println(sum);

        avg = total/students.size();

        System.out.println(avg);
    }
}
