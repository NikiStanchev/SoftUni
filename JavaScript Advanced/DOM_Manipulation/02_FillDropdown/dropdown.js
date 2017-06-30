function addItem() {
    let valueInput = document.querySelector('#newItemValue');
    let textInput = document.querySelector('#newItemText');

    let menu = document.getElementById('menu');
    let option = document.createElement('option');
    option.value = valueInput.value;
    option.textContent = textInput.value;

    menu.appendChild(option);

    valueInput.value = '';
    textInput.value = '';
}
