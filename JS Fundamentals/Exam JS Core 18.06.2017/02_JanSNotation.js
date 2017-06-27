function solve(input) {

    let firstEl = input[0];
    let sum = firstEl;

    for(let i = 1; i < input.length - 1; i += 2){
        let operand = input[i];
        let operator = input[i + 1];

        switch (operator){
            case '/':
                sum /= operand;
                break;
            case '+':
                sum += operand;
                break;
            case '-':
                sum -= operand;
                break;
            case '*':
                sum *= operand;
                break;
            default:
                console.log('Error: too many operands!');
                return;
        }

    }

    console.log(sum);
}

solve([5, 3, 4, '*', '-']);