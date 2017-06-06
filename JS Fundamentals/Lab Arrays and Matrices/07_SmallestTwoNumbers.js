function solve(arr) {
    return arr.sort((a, b) => a - b).filter((a, b) => b <=1);
}

console.log(solve([3, 0, 10, 4, 7, 3]));