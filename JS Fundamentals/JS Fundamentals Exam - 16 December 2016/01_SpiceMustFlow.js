function solve(sourceArr) {
    let [sourse] = sourceArr.map(Number);
    let countDays = 0;
    let totalAmount = 0;

    while(sourse >= 100){
        totalAmount += sourse;
        sourse -= 10;
        countDays++;
    }

    totalAmount = totalAmount - (countDays * 26) - 26;

    if(countDays === 0){
        totalAmount = 0;
    }
    console.log(countDays);
    console.log(totalAmount);

}


solve(['0']);