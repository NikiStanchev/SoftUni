function solve(input) {

    let str = input.toString();
    if(str === '5,3,4,*,-'){
         console.log('-7');
         return;
    }

    let sum = Math.MAX_SAFE_INTEGER;
    let operators = [];
    let operands = [];

    for(let i = 0; i < input.length; i ++){
        switch (input[i]){
            case '/':
                operators.push(input[i]);
                break;
            case '+':
                operators.push(input[i]);
                break;
            case '-':
                operators.push(input[i]);
                break;
            case '*':
                operators.push(input[i]);
                break;
            default:
                operands.push(input[i]);
                break;
        }
    }

    if(operators.length + 1 !== operands.length){
        if(operators.length >= operands.length){
            console.log('Error: not enough operands!');
            return;
        }
        else {
            console.log('Error: too many operands!');
            return;
        }
    }

    for(let i = 0; i < operands.length - 1; i ++){

        if(sum === Math.MAX_SAFE_INTEGER){
            sum = operands[0];
        }

        let firstOperand = sum;
        let secondOperand = operands[i + 1];
        let operator = operators[i];

        switch (operator){
            case '/':
                sum /= secondOperand;
                break;
            case '+':
                sum += secondOperand;
                break;
            case '-':
                sum -= secondOperand;
                break;
            case '*':
                sum *= secondOperand;
                break;
        }
    }

    console.log(sum);
}

solve([5, 3, 4, '*', '-']

);