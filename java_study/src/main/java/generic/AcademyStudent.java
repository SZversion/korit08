package generic;

public class AcademyStudent extends Student {
    private String AcademyName;

    public String getAcademyName() {
        return AcademyName;
    }

    public void setAcademyName(String academyName) {
        AcademyName = academyName;
    }

    @Override
    public String toString() {
        return "AcademyStudent{} " + super.toString();
    }
}
