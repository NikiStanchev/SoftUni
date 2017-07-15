function solution(n) {

    let numbers = [];
    let fib = (function solve(n) {
        let f1 = 0;
        let f2 = 1;

        return function fibunacci() {
            let f3 = f1 + f2;
            [f1, f2] = [f2, f3];
            return f1;
        }
    })();

    for(let i = 0; i < n; i++){
        numbers.push(fib());
    }

    return numbers;
}

console.log(solution(15));