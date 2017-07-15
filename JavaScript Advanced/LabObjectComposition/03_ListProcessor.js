function solve(arrCommands) {
    let myModule = (function () {
        let list = [];

        function add(string) {

            list.push(string);
        }

        function remove(string) {

            list = list.filter(e => e !== string);
        }

        function print() {
            console.log(list.toString());
        }

        return {
            add,
            remove,
            print
        }
    })();

    for(let command of arrCommands){
        let commandTokens = command.split(' ');

        myModule[commandTokens[0]](commandTokens[1]);
    }
}

solve(['add hello', 'add again', 'print']);