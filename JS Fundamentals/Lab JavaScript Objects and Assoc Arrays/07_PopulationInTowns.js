function solve(text) {

    let towns = {};

    for(let i = 0; i < text.length; i++){
        let regex = /[a-zA-Z0-9\s]+/g;

        let obj = text[i].match(regex);

        if(!towns.hasOwnProperty(obj[0].trim())){
            towns[obj[0].trim()] = 0;
        }
        towns[obj[0].trim()] += Number(obj[1].trim());
    }
    Object.entries(towns).forEach((k) => console.log(`${k[0]} : ${k[1]}`));
}


solve(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000', 'Sofia <-> 1200000']);