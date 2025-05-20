package loop;

import java.util.*;
import java.util.stream.Collectors;

public class Main3 {
    public static void main(String[] args) {
        List<String> words = List.of("apple", "banana", "apple", "grape", "banana");
//        Set<String> words2 = new LinkedHashSet<>(words);

        List<String> words3 = new ArrayList<>();
        for (String word : words) {
            if (!words3.contains(word))
                words3.add(word);
        }

        System.out.println(words3);
    }
}
