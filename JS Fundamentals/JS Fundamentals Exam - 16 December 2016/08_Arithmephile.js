function solve(numbers) {

    numbers = numbers.map(Number);
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < numbers.length; i++){

        let currentNumber = numbers[i];

        if(currentNumber >= 0 && currentNumber < 10){
            let sum = 1;
            for(let j = i + 1; j <= i + currentNumber; j++){
                let currentMultiplier = numbers[j];
                sum *= currentMultiplier;

            }
            if(sum > biggestNum){
                biggestNum = sum;
            }
        }

    }
    console.log(biggestNum);

}

solve([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
]);