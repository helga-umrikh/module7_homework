function Electricdevice(name, power) {
  this.type = 'electric device',
  this.name = name,
  this.power = power
};


Electricdevice.prototype.hasWarranty = function(warranty) {
  if(warranty === 'includes') {
    return `This product ${warranty} warranty`;
  }
return `This product ${warranty} warranty`;
}


//Определите родительскую функцию с методами, которые включают/ выключают прибор из розетки
Electricdevice.prototype.switch = function(condition) {
if(condition === undefined) {
  return this.condition = false;
}
return this.condition = !condition;
}


//Создайте делегирующую связь[[Prototype]]для двух конкретных приборов.
function appleProduct(name, power, price) {
this.name = name,
this.power = power,
this.price = price
}

appleProduct.prototype = new Electricdevice();

const iMac = new appleProduct('iMac', 2000, 1700);
const homePod = new appleProduct('HomePod', 1000, 300);


appleProduct.prototype.hasWarranty = function(warranty) {
  if(warranty === 'includes') {
    return `Please, check Your Service and Support Coverage`;
  }
return `This product ${warranty} warranty`;
}


// Создайте экземпляры каждого прибора.

const lamp = new Electricdevice('Lamp', 80);
const computer = new Electricdevice('Computer', 1600);
const blender = new Electricdevice('Blender', 1000);


