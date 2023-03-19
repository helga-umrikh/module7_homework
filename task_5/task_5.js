class Electricdevice {
    constructor(name, power, condition) {
        this.type = "electric device";
        this.name = name;
        this.power = power;
        this.condition = condition;
        this.turnOn = condition ? false : true;
        this.turnOff = condition ? true : false;
    }

    hasWarranty(warranty) {
        if (warranty === "includes") {
            return `This product ${warranty} warranty`;
        }

        return `This product ${warranty} warranty`;
    }
}

class appleProduct extends Electricdevice {
    constructor(price, color, name, power, condition) {
        super(name, power,condition);

        this.price = price;
        this.color = color;
    }

    hasWarranty(warranty) {
        if (warranty === "includes") {
            return `Please, check Your Service and Support Coverage`;
        }
        return `This product ${warranty} warranty`;
    }
}

const iMac = new appleProduct(1700, "blue", "iMac", 2000, false);
const homePod = new appleProduct(300, "yellow", "HomePod", 1000, false);



const lamp = new Electricdevice("Lamp", 80, false);
const computer = new Electricdevice("Computer", 1600, false);
const blender = new Electricdevice("Blender", 1000, false);

