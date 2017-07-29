let Record = (function () {
    let id = 0;

    return class Record{
        constructor(temperature, humidity, pressure, windSpeed){
            //this.id = id++;
            this.temperature = temperature;
            this. humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.id = Record.getId();
        }

        static getId(){
            if(!this._id){
                this._id = 0;
            }
            return this._id++;
        }

        get status(){
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25){
                return 'Stormy';
            }

            return 'Not stormy';
        }

        toString(){
            let result = `Reading ID: ${this.id}\n`;
            result += `Temperature: ${this.temperature}*C\n`;
            result += `Relative Humidity: ${this.humidity}%\n`;
            result += `Pressure: ${this.pressure}hpa\n`;
            result += `Wind Speed: ${this.windSpeed}m/s\n`;
            result += `Weather: ${this.status}`;
            return result;
        }
    }
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(32, 66, 760, 12);
console.log(record2.toString());