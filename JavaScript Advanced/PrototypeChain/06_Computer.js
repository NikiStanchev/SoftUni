function createComputerHierarchy() {
    class Device{
        constructor(manufacturer){
            if(new.target === Device){
                throw new Error('Error');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Device{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor extends Device{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);

        }
    }

    class Battery extends Device{
        constructor(manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = Number(expectedLife);

        }
    }

    class Computer extends Device{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target === Computer){
                throw new TypeError('Error');
            }
            super(manufacturer);
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if(value instanceof Battery){
                this._battery = value;
            }else {
                throw new TypeError('Value is not an instance of Battery');
            }
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if(value instanceof Keyboard){
                this._keyboard = value;
            } else {
                throw new TypeError('Value is not an instance of Keyboard');
            }

        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if(value instanceof Monitor){
                this._monitor = value;
            }else {
                throw new TypeError('Value is not an instance of Monitor');
            }

        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);

//let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","pesho");
//let desktop = new Desktop("JAR Computers",3.3,8,1,1,monitor);
//let desk = new Desktop("JAR Computers",3.3,8,1,keyboard,"monitor");

//console.log(laptop);
//console.log(desktop);
//console.log(desk);
