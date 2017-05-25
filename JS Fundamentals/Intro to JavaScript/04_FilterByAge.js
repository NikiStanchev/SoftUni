function filterPersonByAge(minAge, firstName, firstAge, secondName, secondAge) {

    let firstPerson = {};
    let secondPerson = {};

    firstPerson.name = firstName;
    firstPerson.age = firstAge;

    secondPerson.name = secondName;
    secondPerson.age = secondAge;

    if(firstPerson.age >= minAge){
        console.log(firstPerson);
    }
    if(secondPerson.age >= minAge){
        console.log(secondPerson);
    }
}

filterPersonByAge(12, 'Ivan', 15, 'Asen', 49);