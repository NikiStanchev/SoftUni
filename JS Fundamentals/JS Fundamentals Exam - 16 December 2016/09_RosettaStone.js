function decodeMessage(input) {
    let templateMatrixSite = Number(input[0]);
    let templateMatrix = [];

    for(let i = 1; i < templateMatrixSite + 1; i++){
        let currentRow = input[i].split(' ').map(Number);
        templateMatrix.push(currentRow);
    }


    let entcodeMatrix = [];

    for(let i = 1 + templateMatrixSite; i < input.length; i++){
        let currentRow = input[i].split(' ').map(Number);
        entcodeMatrix.push(currentRow);
    }

    let templateMatrixRows = templateMatrixSite;
    let templateMatrixCols = templateMatrix[0].length;

    for(let entcodedRow = 0; entcodedRow < entcodeMatrix.length; entcodedRow += templateMatrixRows){

        let currentRow = entcodeMatrix[entcodedRow];
        for(let entcodedCol = 0; entcodedCol < entcodeMatrix[entcodedRow].length; entcodedCol += templateMatrixCols){
            let currentEncodedNumber = entcodeMatrix[entcodedRow][entcodedCol];

            for(let templateRow = 0; templateRow < templateMatrix.length; templateRow++){
                let currentTemplateRow = templateMatrix[templateRow];

                for(let templateCol = 0; templateCol < templateMatrix[templateRow].length; templateCol++){
                    let currentTemplateNumber = templateMatrix[templateRow][templateCol];


                    let targetRow = entcodedRow + templateRow;
                    let targetCol = entcodedCol + templateCol;

                    if(targetCol < entcodeMatrix[entcodedRow].length && targetRow < entcodeMatrix.length){

                        let summedNumber = entcodeMatrix[targetRow][targetCol] + templateMatrix[templateRow][templateCol];

                        summedNumber %= 27;

                        if(summedNumber === 0){
                            entcodeMatrix[targetRow][targetCol] = ' ';
                        }
                        else {
                            entcodeMatrix[targetRow][targetCol] = String.fromCharCode(summedNumber + 64);
                        }
                    }
                }
            }
        }
    }

    let output = ' ';
    entcodeMatrix.forEach(function (element) {
        element.forEach(function (letter) {
            output += letter;
        });
    });


    console.log(output.trim());
}

decodeMessage([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
);