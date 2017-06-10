function jsonParser(text) {

    let keys = text[0].split('|').filter(a => a !== '').map(a => a.trim());
    let townsArr = [];

    for(let i = 1; i < text.length; i++){
        let jsonObject = {};
        let towns = text[i].split('|').filter(a => a !== '').map(a => a.trim());

        for(let i = 0; i < towns.length; i++){
            jsonObject[keys[i]] = towns[i];
        }
        townsArr.push(jsonObject);
        jsonObject[keys[1]] = Number(jsonObject[keys[1]]);
        jsonObject[keys[2]] = Number(jsonObject[keys[2]]);
    }
    console.log(JSON.stringify(townsArr));
}

jsonParser(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);