function solve(text) {

    let words = [];
    let count = 0;
    for(let i = 0; i < text.length; i++){
        let word = text[i];

        let regex = /[a-zA-Z]+/g;

        let obj = word.match(regex);

        for(let w of obj){
            if(words.indexOf(w.toLowerCase()) === -1){
                words.push(w.toLowerCase());
            }
        }
    }
    console.log(words.join(', '));
}

solve([`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque quis hendrerit dui.
Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.
Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.
Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.
Morbi in ipsum varius, pharetra diam vel, mattis arcu. Integer ac turpis commodo, varius nulla sed, elementum lectus.
Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.
`]);