function solve(workers) {

    let aktiveWorkers = true;
    let price = 1900;
    let cubics = [];
    let workersArr = workers;

    while(aktiveWorkers){
        aktiveWorkers = false;
        let aktivPrice = 0;
        for(let i = 0; i < workersArr.length; i++){

            if(workersArr[i] < 30){
                aktivPrice += 195;
                aktiveWorkers = true;
            }
            workersArr[i]++;
        }
        if(aktiveWorkers > 0){
            cubics.push(aktivPrice);
        }
    }

    price = price * cubics.reduce((a, b) => a+b);

    console.log(cubics.join(', '));
    console.log(`${price} pesos`);
}

solve([17]);