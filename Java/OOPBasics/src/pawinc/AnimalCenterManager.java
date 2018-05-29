package pawinc;

import pawinc.animals.Animal;
import pawinc.animals.Cat;
import pawinc.animals.Dog;
import pawinc.centers.AdoptionCenter;
import pawinc.centers.Center;
import pawinc.centers.CleansingCenter;

import java.text.Collator;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class AnimalCenterManager {

    private HashMap<String, AdoptionCenter> adoptionCenters;
    private HashMap<String, CleansingCenter> cleansingCenters;
    private List<Animal> cleansedAnimals;
    private List<Animal> adoptedAnimals;

    public AnimalCenterManager(){}

    public AnimalCenterManager(List<AdoptionCenter> adoptionCenter, List<CleansingCenter> cleansingCenter) {
        this.adoptionCenters = new HashMap<>();
        this.cleansingCenters = new HashMap<>();
        this.cleansedAnimals = new ArrayList<>();
        this.adoptedAnimals = new ArrayList<>();
    }


    public void registerCleansingCenter(String name){
        CleansingCenter cleansingCenter = new CleansingCenter(name);
        this.cleansingCenters.putIfAbsent(name, cleansingCenter);
    }

    public void registerAdoptionCenter(String name){
        AdoptionCenter adoptionCenter = new AdoptionCenter(name);
        this.adoptionCenters.putIfAbsent(name, adoptionCenter);
    }

    public void registerDog(String name, int age, int learnedCommands, String adoptionCenterName){
        Dog dog = new Dog(name, age,adoptionCenterName, learnedCommands);
        this.adoptionCenters.get(adoptionCenterName).register(dog);
    }

    public void registerCat(String name, int age, int intelligenceCoefficient, String adoptionCenterName){
        Cat cat = new Cat(name, age, adoptionCenterName, intelligenceCoefficient);
        this.adoptionCenters.get(adoptionCenterName).register(cat);
    }

    public void sendForCleansing(String adoptionCenterName, String cleansingCenterName){
        CleansingCenter cleansingCenter = this.cleansingCenters.get(cleansingCenterName);
        this.adoptionCenters.get(adoptionCenterName).sendForCleansing(cleansingCenter);
    }

    public void cleanse(String cleansingCenterName){
        List<Animal> cleansedAnimals = this.cleansingCenters.get(cleansingCenterName).cleanse();
        for(Animal cleansedAnimal : cleansedAnimals){
            this.adoptionCenters.get(cleansedAnimal.getCenterName()).register(cleansedAnimal);
        }

        this.cleansedAnimals.addAll(cleansedAnimals);
    }

    public void adopt(String adoptionCenterName){
        List<Animal> adoptedAnimals = this.adoptionCenters.get(adoptionCenterName).adopt();

        this.adoptedAnimals.addAll(adoptedAnimals);
    }

    public void printStatistics(){

        StringBuilder builder = new StringBuilder();
        builder.append("Paw Incorporative Regular Statistics\n");
        builder.append(String.format("Adoption Centers: %d\n", this.adoptionCenters.size()));
        builder.append(String.format("Cleansing Centers: %d\n", this.cleansingCenters.size()));
        builder.append(String.format("Adopted Animals: %s\n", getSortedAnimals(this.adoptedAnimals)));
        builder.append(String.format("Cleansed Animals: %s\n", getSortedAnimals(this.cleansedAnimals)));
        builder.append(String.format("Animals Awaiting Adoption: %d\n", getAwaitingAdoptionCount()));
        builder.append(String.format("Animals Awaiting Cleansing: %d\n", getAwaitingCleansingCount()));

        System.out.println(builder.toString());
    }

    private int getAwaitingCleansingCount() {
        return this.cleansingCenters.values()
                .stream()
                .flatMap(c -> c.getAnimals().stream())
                .collect(Collectors.toList())
                .size();
    }

    private int getAwaitingAdoptionCount() {
        return this.adoptionCenters.values()
                .stream()
                .flatMap(c -> c.getAnimals().stream())
                .filter(a -> a.isCleandes())
                .collect(Collectors.toList())
                .size();

    }


    private String getSortedAnimals(List<Animal> animals) {
        if(animals.isEmpty()){
            return "None";
        }else{
            List<String> sorted = animals
                    .stream()
                    .map(a -> a.getName())
                    .sorted(Collator.getInstance())
                    .collect(Collectors.toList());

            return String.join(", ", sorted);
        }
    }
}
