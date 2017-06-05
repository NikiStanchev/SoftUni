function solve(num) {

    let symbols = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let counter = 0;

    for(let i = 0; i < num; i++){

        if(i >= 5){
            i -= 5;
            num -= 5;
        }

        if(counter > 3){
            counter = 0;
        }

        if(counter == 0){
            console.log(`**${symbols[i].charAt(0)}${symbols[i].charAt(1)}**`);
        }

        if(counter == 1){
            console.log(`*${symbols[i].charAt(0)}--${symbols[i].charAt(1)}*`);
        }

        if(counter == 2){
            console.log(`${symbols[i].charAt(0)}----${symbols[i].charAt(1)}`);
        }

        if(counter == 3){
            console.log(`*${symbols[i].charAt(0)}--${symbols[i].charAt(1)}*`);
        }
        counter++;
    }
}

solve(13);