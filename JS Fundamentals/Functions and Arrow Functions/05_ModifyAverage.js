function modifyAverage(num) {
    function averageValue(n) {
        let digits = ("" + n).split("").map(t => parseInt(t));
        let count = digits.length;
        let average = digits.reduce((a, b) => a + b);

        return average / count;
    }

    let result = num;
    while (averageValue(result) <= 5){
        result += '9';
        modifyAverage(result);
    }

    return result;

}

console.log(modifyAverage(5835));