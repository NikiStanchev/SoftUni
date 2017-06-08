function solve(text) {

    let towns = [];
    let sum = 0;

    for(let town of text){
        let startIndex = town.indexOf('|');
        let endIndex = town.indexOf('|', startIndex + 1);
        let key = town.substring(startIndex + 1, endIndex);
        let value = town.substring(endIndex + 1, town.length);

        towns.push(key.trim());
        sum += Number(value);
    }

    console.log(towns.join(', '));
    console.log(sum);
}


solve(['| Sofia           | 300', '| Veliko Tarnovo | 500', '| Yambol          | 275']);