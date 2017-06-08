function solve(str) {

    return str.split('').forEach((v, i) => console.log(`str[${i}] -> ${v}`));
}

solve('Hello, World!');