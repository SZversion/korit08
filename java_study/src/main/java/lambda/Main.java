package lambda;

public class Main {
    public static void main(String[] args) {
        아무거나가능한인터페이스 a = new 식사();
        아무거나가능한인터페이스 b = new 운동();

        a.실행();
        b.실행();

        아무거나가능한인터페이스 c = new 아무거나가능한인터페이스() {
            @Override
            public void 실행() {
                System.out.println("태어남");
            }
        };
        c.실행();

        /*
         *   람다식을 만들 때 꼭 지켜야 하는 조건
         *   인터페이스 내부에 추상 매서드가 하나만 있어야 함 -> 람다식으로 만들 수 있음
         */

        아무거나가능한인터페이스 d = () -> System.out.println("태어났다.");
        d.실행();





        아무거나가능한인터페이스2 e = (String data1, String data2) -> {
            return data1 + data2;
        };
        System.out.println(e.실행("데이터1", "데이터2"));

        // 매개변수의 자료형을 생략 할 수 있고 변수명 변경 가능
        아무거나가능한인터페이스2 f = (d1, d2) -> {
            return d1+d2;
        };
        System.out.println(e.실행("데이터1", "데이터2"));




        // 재정의 함수 내용이 한줄의 명령이면 {} 중괄호를 생략 할 수 있다
        // 단, 리턴이 있는 경우 리턴 값만 한줄로 작성해야 한다
        아무거나가능한인터페이스 g = () -> System.out.println("한줄");
        아무거나가능한인터페이스2 g2 = (d1, d2) -> d1 + d2;




        // 매개변수가 하나면 매개변수를 감싸는 () 소괄호를 생략 할 수 있다.
        아무거나가능한인터페이스3 h = data -> "데이터 : " + data;
        System.out.println(h.실행("아무데이터"));;
    }
}
