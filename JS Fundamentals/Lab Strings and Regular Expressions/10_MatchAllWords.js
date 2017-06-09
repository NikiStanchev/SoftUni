function findAllWords(str) {

    let regex = /\w+/g;

    console.log(str.match(regex).join('|'));
}

findAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');