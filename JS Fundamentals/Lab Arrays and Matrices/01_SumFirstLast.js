function solve(numbers) {
    let sum = [Number(numbers[0]), Number(numbers[numbers.length-1])].reduce((a,b) => a + b);

    return sum;
}


console.log(solve(['20', '30', '40']));


