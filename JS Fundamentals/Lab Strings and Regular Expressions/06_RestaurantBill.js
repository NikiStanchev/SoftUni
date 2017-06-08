function solve(text) {

    let order = [];
    let sum = [];

    for(let i = 0; i < text.length - 1; i += 2){
        order.push(text[i]);
        sum.push(text[i + 1]);
    }

    console.log(`You purchased ${order.join(', ')} for a total sum of ${sum.map(Number).reduce((a,b) => a+b)}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);