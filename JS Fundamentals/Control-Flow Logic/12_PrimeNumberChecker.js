function primeNumber(number) {

    let prime = true;
    let max = Math.ceil(Math.sqrt(number));

    for(let div = 2; div <= max; div++){
        if(number == div){
            continue;
        }
        if(number % div == 0){
            prime = false;
            break;
        }
    }
    return prime && (number > 1);
}