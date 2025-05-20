package loop;

import java.util.List;
import java.util.stream.Collectors;

class Student {
    private String name;
    private int score;

    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", score=" + score +
                '}';
    }
}

public class Main2 {
    public static void main(String[] args) {
        //85점 이상 출력
        List<Student> students = List.of(
                new Student("김준일", 80),
                new Student("김준이", 94),
                new Student("김준삼", 75),
                new Student("김준사", 99),
                new Student("김준오", 85)
        );

        students.stream()
                .filter(student -> student.getScore() > 84)
                .toList()
                .forEach(student -> System.out.println(student.getName()));
    }
}
