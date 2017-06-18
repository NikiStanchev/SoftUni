function solve(input) {

    let matrix = [];
    let coordinates = input[input.length - 1].split(' ');
    let totalDamage = 0;
    let bunnyKill = 0;

    for(let i = 0; i < input.length - 1; i++){
        matrix.push(input[i].split(' ').map(Number));
    }

    for(let i = 0; i < coordinates.length; i++){
        let crd = coordinates[i].split(',').map(Number);

        totalDamage += matrix[crd[0]][crd[1]];
        explode(crd[0], crd[1], matrix);
        bunnyKill++;

    }


    function explode(row, col, matrix) {

        let bunnyDamage = matrix[row][col];

        for(let i = row - 1; i <= row + 1; i++){
            for(let j = col - 1; j <= col + 1; j++){
                if(isInMatrix(i, j , matrix)){
                    matrix[i][j] -= bunnyDamage;
                }
            }
        }

    }

    function isInMatrix(row, col, matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }



    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] > 0){
                totalDamage += matrix[i][j];
                bunnyKill++;
            }
        }
    }

    console.log(totalDamage);
    console.log(bunnyKill);

}


solve([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);