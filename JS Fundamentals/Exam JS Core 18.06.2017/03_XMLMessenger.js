function parseXmlToHtml(input) {

    let pattern = `<message(.*)>(.*)<\/message>`;
    let rgx = new RegExp(pattern, 'g');

    let match = rgx.exec(input);

    let result = '';
    if(input.length !== match[0].length){
        console.log('Invalid message format');
        return;
    }

    // if(firstPerson === 'from'){
    //
    //     if(secondPerson !== 'to'){
    //         console.log('Missing attributes');
    //         return;
    //     }
    //     console.log('<article>');
    //     console.log(`<div>From: <span class="sender">${firstPersonName}</span></div>`);
    //     console.log(`<div>To: <span class="recipient">${secondPersonName}</span></div>`);
    //     console.log('<div>');
    //     console.log(`<p>${messages}</p>`);
    //     console.log('</div>');
    //     console.log('</article>');
    // } else {
    //     if(secondPerson !== 'from'){
    //         console.log('Missing attributes');
    //         return;
    //     }
    //     console.log('<article>');
    //     console.log(`<div>From: <span class="sender">${secondPersonName}</span></div>`);
    //     console.log(`<div>To: <span class="recipient">${firstPersonName}</span></div>`);
    //     console.log('<div>');
    //     console.log(`<p>${messages}</p>`);
    //     console.log('</div>');
    //     console.log('</article>');
    // }

    let checkInput = match[1].split(' ').filter(x => x !== '');

    result += '<article>\n';

    let toPerson = '';
    let fromPerson = '';
    let toPersonName = '';
    let fromPersonName = '';

    for(let i = 0; i < checkInput.length; i++){



        let object = checkInput[i];
        let pattern = `([a-z]+)="([A-Za-z\\s.]+)"`;
        let rgxObject = new RegExp(pattern, 'g');

        let matchObject = rgxObject.exec(object);

        if(matchObject === null){
            console.log('Invalid message format');
            return;
        }
        if(matchObject[1] === 'to'){
            toPersonName = matchObject[2];
        } else {
            fromPersonName = matchObject[2];
        }


    }

    console.log(fromPersonName);
    console.log(toPersonName);
    console.log(result);
}

parseXmlToHtml('<message to="Bob" from="Alice" timestamp="ANI">Hey man, what\'s up?</message>');


