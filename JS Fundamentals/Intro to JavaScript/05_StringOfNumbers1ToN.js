function stringOfNumbers(number) {

    let result = '';
    for(let i = 1; i <= number; i++){
        result += i;
    }

    return result;
}

console.log(stringOfNumbers(15));