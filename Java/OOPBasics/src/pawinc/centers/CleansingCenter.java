package pawinc.centers;

import pawinc.animals.Animal;

import java.util.ArrayList;
import java.util.List;

public class CleansingCenter extends Center{
    public CleansingCenter(String name) {
        super(name);
    }

    public List<Animal> cleanse(){
        List<Animal> cleansed = new ArrayList<>();
        super.getAnimals().stream().forEach(animal -> {
            animal.cleanse();
            cleansed.add(animal);
        });

        super.removeAnimals(cleansed);

        return cleansed;
    }
}
