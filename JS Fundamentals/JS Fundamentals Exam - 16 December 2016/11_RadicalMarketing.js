function solve(inputString) {

    let peopleWithSubscribels = new Map();
    let personSubstriteTo = new Map();

    for(let i = 0; i < inputString.length; i++){
        let currentCommand = inputString[i];

        if(currentCommand.indexOf('-') === -1){
            if(peopleWithSubscribels.has(currentCommand)){
               continue;
            }


            peopleWithSubscribels.set(currentCommand, []);
            personSubstriteTo.set(currentCommand, 0);
        } else {
            [firstPerson, secondPerson] = currentCommand.split('-');
            if(!peopleWithSubscribels.has(firstPerson) || !peopleWithSubscribels.has(secondPerson)){
                continue;
            }
            if(firstPerson === secondPerson || peopleWithSubscribels.get(secondPerson).indexOf(firstPerson) !== -1){
                continue;
            }

            let currentSubscribers = personSubstriteTo.get(firstPerson);
            personSubstriteTo.set(firstPerson, currentSubscribers + 1);

            peopleWithSubscribels.get(secondPerson).push(firstPerson);
        }

    }


    let sortedArrey = (Array.from(peopleWithSubscribels).sort((a, b) => {
        let resultCode = b[1].length - a[1].length;
        if(resultCode === 0){
            resultCode = personSubstriteTo.get(b[0]) - personSubstriteTo.get(a[0]);
            return resultCode;
        } else {
            return resultCode;
        }
    }))[0];


    console.log(sortedArrey[0]);

    for(let i = 0; i < sortedArrey[1].length; i++){
        console.log(`${i + 1}. ${sortedArrey[1][i]}`);
    }
}

solve([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A',
    'A-C'
])