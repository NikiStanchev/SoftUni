function getInfraction(elements) {

    function getLimit(zone) {
        switch (zone){
            case 'motorway':return 130;
            case 'interstate':return 90;
            case 'city':return 50;
            case 'residential':return 20;
        }
    }

    let speed = elements[0];
    let limit = elements[1];
    let overSpeed = speed - getLimit(limit);

    if(overSpeed <= 0){
        return '';
    }
    if(overSpeed <= 20){
        return 'speeding';
    }
    if(overSpeed <= 40){
        return 'excessive speeding';
    }
    if(overSpeed > 40) {
        return 'reckless driving';
    }
}

console.log(getInfraction([21, 'residential']));