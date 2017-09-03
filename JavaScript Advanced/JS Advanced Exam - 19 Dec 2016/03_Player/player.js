class Player {

    constructor(nickName){
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score) {
        if(!isNaN(score) && score !== null){
            this.scores.push(+score);
            this.scores.sort((a,b) => b-a);
        }

        return this;
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore(){
        return this.scores[0];
    }

    get topFiveScore(){
        //let sortedScores = this.scores.sort((a,b) => b - a);
        return this.scores.slice(0, 5);
    }

    toString(){
        let returnString = this.scores.join(',');
        return `${this.nickName}: [${returnString}]`;
    }
}

let player = new Player('Misho');

player.addScore(130);
player.addScore(240);
player.addScore(0);
player.addScore('Pesho');

console.log(player.toString());
