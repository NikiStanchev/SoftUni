function CalculateSum(...arr){

    let sum = 0;
    for(let num of arr){
        sum += num;
    }

    console.log(`sum = ${sum.toFixed(2)}`);
    console.log(`VAT = ${(sum * 0.2).toFixed(2)}`);
    console.log(`total = ${(sum * 1.2).toFixed(2)}`);

}

CalculateSum(1.20,2.60,3.50);