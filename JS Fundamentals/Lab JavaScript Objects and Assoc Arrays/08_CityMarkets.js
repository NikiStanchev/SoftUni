function solve(text) {

    let towns = {};

    for(let i = 0; i < text.length; i++){
        let regex = /[a-zA-Z0-9\s.]+/g;
        let obj = text[i].match(regex);

        let town = obj[0].trim();
        let product = obj[1].trim();
        let sum = Number(obj[2].trim()) * Number(obj[3].trim());

        if(!towns.hasOwnProperty(town)){
            towns[town] = {};
        }

        towns[town][product] = sum;
    }

    let keys = [];
    Object.keys(towns).forEach(k => keys.push(k));

    for(let i = 0; i < keys.length; i++){
        let obj = towns[keys[i]];

        console.log(`Town - ${keys[i]}`);

        Object.entries(obj).forEach((k) => console.log(`$$$${k[0]} : ${k[1]}`));
    }
}



solve(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2']);