package com.company;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedHashMap;

public class P04_PopulationCounter {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String[] input = reader.readLine().split("\\|");

        LinkedHashMap<String, LinkedHashMap<String, Long>> countries = new LinkedHashMap<>();

        while (!input[0].equals("report")){
            if(!countries.containsKey(input[1])){
                countries.put(input[1], new LinkedHashMap<>());
            }
            countries.get(input[1]).put(input[0], Long.parseLong(input[2]));
            input = reader.readLine().split("\\|");
        }

        countries
                .entrySet()
                .stream()
                .sorted((a, b) ->
                    Long.compare(b.getValue().values().stream().mapToLong(n -> n).sum(),
                            a.getValue().values().stream().mapToLong(n -> n).sum())
                ).forEach(n -> {
                    System.out.println(n.getKey() + " (total population: " + n.getValue().values().stream().mapToLong(m -> m).sum() + ")");
                    n.getValue().entrySet().stream().sorted((c, d) -> d.getValue().compareTo(c.getValue()))
                            .forEach(x -> System.out.println("=>" + x.getKey() + ": " + x.getValue()));
        });
    }
}
