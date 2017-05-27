function leapYear(year) {

    let isLeapYear = false;

    if(year % 4 == 0){
        isLeapYear = true;
    }
    if(year % 100 == 0){
        isLeapYear = false;
    }

    if(year % 400 == 0){
        isLeapYear = true;
    }

    if(isLeapYear){
        console.log('yes');
    }
    else {
        console.log('no');
    }
}

leapYear(1900);