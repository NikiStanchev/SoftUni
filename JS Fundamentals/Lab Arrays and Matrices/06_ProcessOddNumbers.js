function solve(arr) {

    return arr.filter((a,b) => b % 2 == 1).map(a => a * 2).reverse();
}


console.log(solve([3, 0, 10, 4, 7, 3]));