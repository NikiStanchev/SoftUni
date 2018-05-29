package pawinc;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        AnimalCenterManager manager = new AnimalCenterManager();
        String line = reader.readLine();

        while(!line.equals("Paw Paw Pawah")){
            String[] commandArgs = line.split("\\|");
            String commandType = commandArgs[0];

            switch (commandType){
                case "RegisterCleansingCenter":
                    manager.registerCleansingCenter(commandArgs[1]);
                    break;
                case "RegisterAdoptionCenter":
                    manager.registerAdoptionCenter(commandArgs[1]);
                    break;
                case "RegisterDog":
                    manager.registerDog(
                            commandArgs[1],
                            Integer.parseInt(commandArgs[2]),
                            Integer.parseInt(commandArgs[3]),
                            commandArgs[4]);
                    break;
                case "RegisterCat":
                    manager.registerCat(
                            commandArgs[1],
                            Integer.parseInt(commandArgs[2]),
                            Integer.parseInt(commandArgs[3]),
                            commandArgs[4]);
                    break;
                case "SendForCleansing":
                    manager.sendForCleansing(commandArgs[1], commandArgs[2]);
                    break;
                case "Cleanse":
                    manager.cleanse(commandArgs[1]);
                    break;
                case "Adopt":
                    manager.adopt(commandArgs[1]);
                    break;
                default:
                    break;
            }

            line = reader.readLine();
        }
    }
}
