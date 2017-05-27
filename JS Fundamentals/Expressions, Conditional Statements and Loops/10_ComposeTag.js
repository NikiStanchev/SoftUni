function composeImageTag(elements) {

    let fileLocation = elements[0];
    let alternateText = elements[1];
    let html = `<img src="${fileLocation}" alt="${alternateText}">`;

    return html;
}

console.log(composeImageTag(['smiley.gif', 'Smiley Face']));