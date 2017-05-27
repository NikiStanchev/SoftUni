function returnLastDay(date) {

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
            return true;
        }
        else {
            return false;
        }
    }

    let month = date[1];
    let year = date[2];

    let lastMonth;
    let lastYear;

    let lastDay = 0;

    if(month > 1){
        lastMonth = month - 1;
        lastYear = year;
    }
    else {
        lastMonth = 12;
        lastYear = year - 1;
    }

    switch (lastMonth){
        case 1:
            lastDay = 31;
            break;
        case 2:
            if(leapYear(lastYear) == true){
                lastDay = 29;
            }
            else {
                lastDay = 28;
            }
            break;
        case 3:
            lastDay = 31;
            break;
        case 4:
            lastDay = 30;
            break;
        case 5:
            lastDay = 31;
            break;
        case 6:
            lastDay = 30;
            break;
        case 7:
            lastDay = 31;
            break;
        case 8:
            lastDay = 31;
            break;
        case 9:
            lastDay = 30;
            break;
        case 10:
            lastDay = 31;
            break;
        case 11:
            lastDay = 30;
            break;
        case 12:
            lastDay = 31;
            break;
        default:
            break;

    }

    return lastDay;
}

console.log(returnLastDay([17, 3, 2002]));