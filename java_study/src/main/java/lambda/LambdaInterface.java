package lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.function.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaInterface {
    public static void main(String[] args) {

        // lambda Runnable
        Runnable runnable = () -> {
            System.out.println("QWER");
        };
        System.out.println("Runnable");
        runnable.run();
        System.out.println();

        // lambda Supplier
        Supplier<Double> supplier = () -> 10.0;
        System.out.println("Supplier");
        System.out.println(supplier.get());
        System.out.println();

        // lambda Consumer
        Consumer<Integer> consumer = n -> System.out.println("전달받은 데이터 : " + n);
        consumer.accept(100);

        List<Integer> numList = List.of(10, 20, 30, 40);
        System.out.println("Consumer");
        numList.forEach(n -> System.out.println("number -> " + n));
        System.out.println();

        // lambda Function
        Function<String, String> fx = name -> "이름 : " + name;
        System.out.println("Function");
        System.out.println(fx.apply("ASDF"));;
        System.out.println();

        // 단항연산자 모양의 Function  ->  Function과 같지만 입력값과 출력값의 자료형이 같음
        UnaryOperator<String> fx2 = name -> "이름 : " + name;
        System.out.println("UnaryOperator");
        System.out.println(fx2.apply("QWER"));
        System.out.println();

        // lambda Predicate  ->  return boolean only
        String searchName = "김씨";
        List<String> nameList1 = List.of("김씨", "박씨 ", "최씨", "오씨");
        List<String> nameList2 = List.of("유씨", "안씨 ", "황씨", "장씨");
        Predicate<List<String>> isContains = list -> list.contains(searchName);
        System.out.println(nameList1.contains(searchName));
        System.out.println(isContains.test(nameList1));

        Predicate<String> isContains2 = name -> nameList1.contains(searchName) || nameList2.contains(searchName);
        System.out.println("Predicate");
        System.out.println(isContains2.test("황씨"));
        System.out.println();


        // Stream
        /*
        *   스트림 구성
        *   1 단계 -> 스트림 생성
        *   2 단계 -> 중간 연산 (조건에 맞는 데이터 구분, 데이타 값 수정, 정렬, 중복 제거, 제한, 건너뛰기) -> 스트림을 return 해주는 연산들
        *   3 단계 -> 최종 연산 (반복, 결과 수집, 개수 조회, 매칭 여부, 검색, 합산) -> 스트림 외에 다른 자료형을 return 하는 연산들
        *
        *   스트림 특징 -> 반복 중 뒤로 돌아갈 수 없다 (일회용이다)
        *   numStream.forEach();     ->   이게 실행되면 스트림에서 값을 꺼내서 사용했기 때문에 이미 메모리는 비워진 상태임
        *   numStream.findFirst();   ->   메모리에 남아있는게 없어서 실행 할 수 없음
        */
        List<String> dataList = List.of("aaaa", "bbbb", "cccc", "abaa", "bbaa", "ccbb");
        List<String> extract = new ArrayList<>();
        for (String data : dataList) {
            if (data.contains("a")) {
                extract.add(data);
            }
        }
        System.out.println(extract);
        System.out.println();

        List<String> dataList2 = List.of("aaaa", "bbbb", "cccc", "abaa", "bbaa", "ccbb");
        List<String> extract2 = dataList2.stream()
                .filter(data -> data.contains("a"))
                .collect(Collectors.toList());
        System.out.println(extract2);
    }
}
