function CountLetter(string, char) {
    let count = 0;
    for(let ch of string){
        if(ch == char){
            count ++;
        }
    }

    return count;
}

console.log(CountLetter('string', 's'));