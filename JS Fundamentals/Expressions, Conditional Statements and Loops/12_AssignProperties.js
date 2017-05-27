function composesObject(elements) {

    let key1 = elements[0];
    let value1 = elements[1];
    let key2 = elements[2];
    let value2 = elements[3];
    let key3 = elements[4];
    let value3 = elements[5];

    let obj ={};
    obj[key1] = value1;
    obj[key2] = value2;
    obj[key3] = value3;
    return obj;
}

console.log(composesObject(['name', 'Pesho', 'age', '23', 'gender', 'male']));