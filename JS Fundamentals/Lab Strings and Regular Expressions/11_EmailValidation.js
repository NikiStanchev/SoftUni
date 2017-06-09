function validateEmail(email) {

    let regex = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/;

    let isValid = regex.test(email);
    if(isValid){
        console.log('Valid');
    }
    else {
        console.log('Invalid');
    }
}

validateEmail('valid@email.bg');