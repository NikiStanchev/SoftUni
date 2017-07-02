function sortArray(arr, orderType) {

    if(orderType === 'asc'){
        return (arr.sort((a,b) => {
            return a - b;
        }));
    }else {
        return (arr.sort((a,b) => {
            return b - a;
        }));
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));