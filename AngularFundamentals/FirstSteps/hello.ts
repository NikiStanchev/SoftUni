function greet(name:string){
	return 'Hello from ' + name
}

const greeting = greet('Pesho')

console.log(greeting)

function sum(a:number, b:number){
	return a + b
}

const myArr: number[] = [1,2,3]
const myArr2: Array<number> = [1,2,3]

interface Person {
	name:string
}

class Student implements Person{

	constructor(public name:string){
	}
}