package loop;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class StudentName {
    private String name;

    public StudentName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return
                "name=" + name + " ";
    }
}

public class Main7 {
    public static void main(String[] args) {
        // Student 객체들을 전부 studentNames 객체들로 변환하여 리스트를 출력
        List<StudentName> studentNames = new ArrayList<>();

        List<Student> students = List.of(
                new Student("김준일", 80),
                new Student("김준이", 94),
                new Student("김준삼", 75),
                new Student("김준사", 99),
                new Student("김준오", 85)
        );

        for(Student student : students) {
            studentNames.add(new StudentName(student.getName()));
        }

        // 점수가 85점 이상만
        List<StudentName> studentNames2 = students.stream()
                .filter(student -> student.getScore() > 84)
                .map(student -> new StudentName(student.getName()))
                .collect(Collectors.toList());

        System.out.println(studentNames);
        System.out.println(studentNames2);
    }
}
