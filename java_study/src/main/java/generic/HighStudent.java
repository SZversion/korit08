package generic;

public class HighStudent extends Student {
    private String HighSchoolName;

    public String getHighSchoolName() {
        return HighSchoolName;
    }

    public void setHighSchoolName(String highSchoolName) {
        HighSchoolName = highSchoolName;
    }

    @Override
    public String toString() {
        return "HighStudent{" +
                "HighSchoolName='" + HighSchoolName + '\'' +
                "} " + super.toString();
    }

    public void printGrade() {
        System.out.println("학생 성적 : ");
    }
}
