package loop;

import java.util.List;

public class Main5 {
    public static void main(String[] args) {
        // 단어의 시작이 A 또는 a 로 시작하는 단어를 newWords 리스트에 담아 출력
        List<String> words = List.of("Apple", "banana", "avocado", "carrot");
        List<String> newList = words.stream()
                .filter(word -> word.startsWith("a") || word.startsWith("A"))
                .toList();

        System.out.println(newList);
    }
}
