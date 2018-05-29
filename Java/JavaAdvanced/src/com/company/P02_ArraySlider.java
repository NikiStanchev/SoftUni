package com.company;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

public class P02_ArraySlider {

    private static List<BigInteger> list = new ArrayList<>();
    private static Integer currentIndex = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String[] input = reader.readLine().trim().split("\\s+");

        for(String s : input){
            list.add(new BigInteger(s));
        }

        String command = reader.readLine();
        while(!command.equals("stop")){
            String[] reminder = command.trim().split("\\s+");
            int offset = Integer.parseInt(reminder[0]);
            String operation = reminder[1];
            BigInteger operand =  new BigInteger(reminder[2]);

            findIndex(offset);

            operationExecute(operation, operand);


            command = reader.readLine();
        }

        System.out.println(list);
       // print();
    }

    private static void operationExecute(String operation, BigInteger operand) {
        switch (operation){
            case"&":
                list.set(currentIndex, list.get(currentIndex).and(operand));
                break;
            case"|":
                list.set(currentIndex, list.get(currentIndex).or(operand));
                break;
            case"^":
                list.set(currentIndex, list.get(currentIndex).xor(operand));
                break;
            case"+":
                list.set(currentIndex, list.get(currentIndex).add(operand));
                break;
            case"-":
                if(list.get(currentIndex).subtract(operand).compareTo(BigInteger.ZERO) == -1){
                    list.set(currentIndex, BigInteger.ZERO);
                }else {
                    list.set(currentIndex, list.get(currentIndex).subtract(operand));
                }
                break;
            case"*":
                list.set(currentIndex, list.get(currentIndex).multiply(operand));
                break;
            case"/":
                list.set(currentIndex, list.get(currentIndex).divide(operand));
                break;
            default:
                break;
        }
    }

    private static void findIndex(int offset) {

        //offset = offset % list.size();

        //if(currentIndex + offset >= list.size()){
        //    currentIndex = (currentIndex + offset) % list.size();
        //}else if (currentIndex + offset < 0) {
        //    currentIndex = list.size() +  offset;
        //}else{
        //    currentIndex += offset;
        //}

        currentIndex = ((currentIndex + offset) % list.size() >= 0 ?
                (currentIndex + offset) % list.size() :
                list.size() + (currentIndex + offset) % list.size());
    }
}
