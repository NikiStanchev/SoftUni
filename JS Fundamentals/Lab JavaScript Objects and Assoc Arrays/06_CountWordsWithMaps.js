function countWords(inputLines) {

    let text = inputLines.join('/n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w != '').map(w => w.toLowerCase()).sort();

    let wordsCount = {};
    for(let w of words){
        wordsCount[w] ? wordsCount[w]++ : wordsCount[w] = 1;
    }


    Object.entries(wordsCount).forEach((k) => console.log(`'${k[0]}' -> ${k[1]} times`));

}


countWords(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);