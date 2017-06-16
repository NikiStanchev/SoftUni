function solve(text) {

    let textStr = text[0];

    textStr = textStr.replace(/[.,!?:;]\s*/g, (match) => match.trim() + ' ');
    textStr = textStr.replace(/\s+[.,!?:;]/g, (match) => match.trim());
    textStr = textStr.replace(/\.\s*\.\s*\.\s*\!/g, '...!');
    textStr = textStr.replace(/(\.\s+)(\d+)/g, (match, gr1, gr2) => gr1.trim() + gr2);
    textStr = textStr.replace(/\"(\s*[^\"]+\s*)\"/g, (match, gr1) => '"' + gr1.trim() + '"');

    console.log(textStr);
}

solve(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']);