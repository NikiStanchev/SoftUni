let myName:string = 'pesho';
let myAge:number = 15;

class Car{

    constructor(private paint:string, private engine:string){}
    start(){
        console.log('My color is ' + this.paint + 'and i have ' + this.engine + ' engine')
    }
}

let Lambo = new Car('black', 'V8')
Lambo.start()

interface human{
    name?:string;
    readonly age:number;
}

let pesho:human = {
    name:'Pesho',
    age:12
}

let gosho = {
    age:15
}

let cal = (...params:human[]) => {
    params.map(x=>{
        console.log(x)
    })
}

cal(pesho, gosho)
