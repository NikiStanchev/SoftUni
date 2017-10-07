let db = {}
const fs = require('fs');


let put = (key, value)=>{
    if(keyIsString(key)){
        db[key] = value;
    }
}

let get = (key)=>{
    
    if(validateData(key)){
        return db[key];
    } 
}

let getAll = ()=>{
    if(db.length === 0){
        console.log('the object is empty');
        return;
    }
    return db;
}

let update = (key, newValue)=>{
    if(validateData(key)){
        db[key] = newValue;
    }
}

let deleteItem = (key) => {
    if(validateData(key)){
        delete db[key];
    }
}

let clear = () => {
    db = {};
}

let save = () => {
    fs.writeFileSync('./storage.json', JSON.stringify(db), 'utf8')
}

let load = () => {
    try{
        db = JSON.parse(fs.readFileSync('./storage.json', 'utf8'));
    } catch(err){

    } finally{

    }
}


let putASynchron = (callback)=>{
    callback();
};

let saveASynchron = ()=>{
    fs.writeFile('./storage.json', JSON.stringify(db), 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

let loadASynchron = (callback)=>{
    fs.readFile('./storage.json', 'utf8', ((err, data)=>{
        if(err){
            return;
        }
        db = JSON.parse(data);
        callback();
    }));
}

function keyIsString(key){
    if(typeof(key) !== 'string'){
        console.log('the key must be a string');
        return false;
    }
    return true;
}

function keyExist(key){
    if(!db.hasOwnProperty(key)){
        console.log('i dont have this stuff');
        return false;
    }
    return true;
}

function validateData(key){
    if(keyIsString && keyExist){
        return true;
    }
    return false;
}

module.exports = {
    put:put,
    get:get,
    getAll:getAll,
    update:update,
    delete:deleteItem,
    clear:clear,
    save:save,
    load:load,
    saveASynchron:saveASynchron,
    loadASynchron:loadASynchron,
    putASynchron:putASynchron
}