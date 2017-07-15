function subSum(arr, startIndex, endIndex) {

    if(!Array.isArray(arr)){
        throw new Error('Input is not an array');
    }
    if(startIndex < 0){
        throw new RangeError('startIndex is < 0');
    }
    if(endIndex >= arr.length){
        endIndex = arr.length - 1;
    }
    let sum = 0;
    for(let i = startIndex; i <= endIndex; i++){
        sum += Number(arr[i]);
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], -1, 4));
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 40));
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 4));
console.log(subSum('pesho', 3, 4));
console.log(subSum({}, 3, 4));
console.log(subSum(['10','20','30','40','50','60'], 3, 4));
console.log(subSum(([10, 'twenty', 30, 40], 0, 2)));
