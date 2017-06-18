function decodeMessages(input) {

    let speciaKey = input[0];
    let pattern = `(\\s|^)(${speciaKey}\\s+)([!#$%A-Z]{8,})(\\.|,|\\s|$)`;
    let rgx = new RegExp(pattern, 'gi');

    for(let i = 1; i < input.length; i++){
        let currentString = input[i];

        let match;
        while (match = rgx.exec(currentString)){

            let encodedWord = match[3];
            if(encodedWord.toUpperCase() !== encodedWord){
                continue;
            }

            let decodedWord = decodeWord(encodedWord);
            let decodedMatch = match[1] + match[2] + decodedWord + match[4];
            currentString = currentString.replace(match[0], decodedMatch);

        }
        console.log(currentString);
    }

    function decodeWord(word) {
        while (word.indexOf('!') !== -1){
            word = word.replace('!', '1');
        }
        while (word.indexOf('%') !== -1){
            word = word.replace('%', '2');
        }
        while (word.indexOf('#') !== -1){
            word = word.replace('#', '3');
        }
        while (word.indexOf('$') !== -1){
            word = word.replace('$', '4');
        }
        return word.toLowerCase();
    }
}

decodeMessages(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);