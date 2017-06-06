function negativeFirst(arr) {

    let negativeValues =  arr.filter(a => a < 0);
    let positiveValues = arr.filter(a => a >= 0);
    let resultArray = [];

    negativeValues.forEach(a => resultArray.unshift(a));
    positiveValues.forEach(a => resultArray.push(a));

    resultArray.forEach(a => console.log(a));
}

negativeFirst([3, -2, 0, -1]);


