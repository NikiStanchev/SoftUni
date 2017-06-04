function cookingByNumbers(input) {

    function calculate(operand, operator) {

        switch (operator){
            case 'chop':return operand / 2;
            case 'dice':return Math.sqrt(operand);
            case 'spice':return operand + 1;
            case 'bake':return operand * 3;
            case 'fillet':return operand - (operand * 0.2);
        }
    }

    let result = parseFloat(input[0]);
    for(let i = 1; i < input.length; i++){
        result = calculate(parseFloat(result), input[i]);
        console.log(result);
    }
}

console.log(cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']));