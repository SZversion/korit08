package loop;

import java.util.List;

public class Main1 {
    public static void main(String[] args) {
        //5글자 이상의 개수 출력
        List<String> words = List.of("apple", "cat", "banana", "dog", "grapes");
        int count = (int)words.stream()
                .filter(word -> word.length() > 4)
                .count();
        System.out.println(count);
    }
}