function htmlParser(text) {

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    let html = '';
    html += '<table>\n';
    html += '    <tr><th>name</th><th>score</th></tr>\n';

    let jsonArr = JSON.parse(text);

    for(let i = 0; i < jsonArr.length; i++){
        html += `    <tr><td>${htmlEscape(jsonArr[i].name)}</td><td>${jsonArr[i].score}</td></tr>\n`;
    }
    html += '</table>';

    return html;
}