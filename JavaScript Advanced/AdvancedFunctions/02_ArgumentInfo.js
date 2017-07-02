function solve() {

    let types = {};
    for(let i = 0; i < arguments.length; i++){
        let argumentValue = arguments[i];
        let argumentType = typeof argumentValue;
        if(!types.hasOwnProperty(argumentType)){
            types[argumentType] = 0;
        }
        types[argumentType]++;

        console.log(`${argumentType}: ${argumentValue}`);
    }

    let sortedArr = [];
    for(let type in types){
        if(types.hasOwnProperty(type)){
            let element = types[type];
            sortedArr.push([type, element]);
        }
    }
    sortedArr = sortedArr.sort((a,b) => {
        return b[1] - a[1];
    });

    for(let i = 0; i < sortedArr.length; i++){
        let el = sortedArr[i];

        console.log(`${el[0]} = ${el[1]}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });