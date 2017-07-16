function solve() {
    class Balloon{
        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }

    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon(){
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text(){
            return this._text;
        }
    }

    return{
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let classes = solve();
let PartyBalloon = classes.PartyBalloon;

let b = new PartyBalloon('green', 14, 'blue', 20);

console.log(b);