function solve(base, increment) {


    let lapisLazuli = 0;
    let marble = 0;
    let gold = 0;
    let stone = 0;
    let count = 1;

    for(let i = base; i > 0; i -= 2 ){

        if(i < 3){
            gold += i * i;
            continue;
        }

        stone += (i - 2) * (i - 2);

        if(count % 5 === 0){
            lapisLazuli += ((i * 2) + (i * 2)) - 4;
        }
        else {
            marble += ((i * 2) + (i * 2)) - 4;
        }
        count++;
    }

    let result = `Stone required: ${Math.ceil(stone * increment)}`;
    console.log(result);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${parseInt(count * increment)}`);


}

solve(23, 0.5);
