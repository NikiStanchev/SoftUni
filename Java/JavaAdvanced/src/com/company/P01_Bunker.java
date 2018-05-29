package com.company;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P01_Bunker {

    private static Integer[][] matrix;
    private static Integer rows;
    private static Integer cols;

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String[] sizes = reader.readLine().split(" ");
        rows = Integer.parseInt(sizes[0]);
        cols = Integer.parseInt(sizes[1]);

        matrix = new Integer[rows][cols];

        readMatrix(reader);

        String command = reader.readLine();
        while (!command.equals("cease fire!")){
            String[] tokens = command.split(" ");
            Integer impactRow = Integer.parseInt(tokens[0]);
            Integer impactCol = Integer.parseInt(tokens[1]);
            String power = tokens[2];
            commandExecute(impactRow, impactCol, power);
            command = reader.readLine();
        }
        
        int cellDestroyed = findResult();
        Double percent = 100.0 * cellDestroyed / (rows * cols);

        System.out.println("Destroyed bunkers: " + cellDestroyed);
        System.out.println("Damage done: " + String.format("%.1f", percent) + " %");
    }

    private static int findResult() {
        Integer counter = 0;
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[0].length; col++) {
                if(matrix[row][col] <= 0){
                    counter += 1;
                }
            }
        }
        return counter;
    }


    private static void commandExecute(Integer impactRow, Integer impactCol, String power) {
        Integer damage = (int)power.charAt(0);
        cellDamage(impactRow, impactCol, damage);
        if(damage % 2 != 0){
            damage = damage / 2 + 1;
        }else {
            damage = damage / 2;
        }
        cellDamage(impactRow, impactCol + 1, damage);
        cellDamage(impactRow+1, impactCol+1, damage);
        cellDamage(impactRow+1, impactCol, damage);
        cellDamage(impactRow+1, impactCol-1, damage);
        cellDamage(impactRow, impactCol-1, damage);
        cellDamage(impactRow-1, impactCol-1, damage);
        cellDamage(impactRow-1, impactCol, damage);
        cellDamage(impactRow-1, impactCol+1, damage);
    }

    private static void cellDamage(Integer impactRow, Integer impactCol, Integer damage) {

        if(impactRow >= rows || impactCol >= cols){
            return;
        }
        try{
            matrix[impactRow][impactCol] -= damage;
        }catch (IndexOutOfBoundsException ex){
            System.out.println(ex);
        }
    }

    private static void readMatrix(BufferedReader reader) throws IOException {
        for (int row = 0; row < matrix.length; row++){
            String[] reminder = reader.readLine().split(" ");
            for (int col = 0; col < reminder.length; col++) {
                matrix[row][col] = Integer.parseInt((reminder[col]));
            }
        }
    }
}
