function validDistance(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    let distance3 = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    let distance2 = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
    let distance1 = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2));

    let dist1Int = parseInt(distance1);
    let dist2Int = parseInt(distance2);
    let dist3Int = parseInt(distance3);

    if(distance1 == dist1Int){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(distance2 == dist2Int){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if(distance3 == dist3Int){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

validDistance([2, 1, 1, 1]);
