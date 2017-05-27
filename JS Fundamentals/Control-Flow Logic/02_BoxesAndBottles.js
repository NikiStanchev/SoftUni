function boxesAndBottles(bottles, boxes) {

    let boxNumber = bottles / boxes;

    boxNumber = Math.ceil(boxNumber);
    return boxNumber;
}


console.log(boxesAndBottles(15, 5));