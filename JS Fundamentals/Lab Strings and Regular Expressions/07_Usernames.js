function createUsername(emails) {

    let usernames = [];
    for(let email of emails){
        let username = [];
        let startIndex = email.indexOf('@');
        let element = email.substring(0, startIndex);
        element += '.';
        element += email.substring(startIndex + 1, startIndex + 2);


        let endIndex = email.indexOf('.', startIndex + 1);

        while(endIndex !== -1){
            element +=  email.substring(endIndex + 1, endIndex + 2);
            endIndex = email.indexOf('.', endIndex + 1);
        }
        usernames.push(element);
    }

    console.log(usernames.join(', '));
}

createUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);