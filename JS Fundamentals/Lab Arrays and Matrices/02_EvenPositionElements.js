function solve(elements) {

    let result = [];

    for(let i = 0; i < elements.length; i+=2){
        result.push(elements[i]);
    }

    return result.join(' ');
}


console.log(solve(['20', '30', '40']));



