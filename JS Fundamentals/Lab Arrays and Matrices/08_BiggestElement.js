function takeBiggestElement(matrix) {
    let result = [];

    matrix.forEach(arr => result.push(arr.sort((a, b) => b - a).shift()));

    return result.sort((a, b) => b - a).shift();

}

console.log(takeBiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));