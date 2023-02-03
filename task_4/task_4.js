function Electricdevice(name, power) {
    this.name = name,
    this.power = power
}

const device1 = new Electricdevice('Lamp', 80);
const device2 = new Electricdevice('Computer', 1600);
const device3 = new Electricdevice('Blender', 1000);


console.log(device4);

function Switching() {
    let enabled = false;

    this.enable = function() {
    enabled = true;
    };

    this.disable = function() {
    enabled = false;
    };
}