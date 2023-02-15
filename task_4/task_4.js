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



//

function Electricdevice(name, power) {
    this.name = name,
    this.power = power, 
    this.isPowered = false
    }
  };
  
  
  
   
  const device1 = new Electricdevice('Lamp', 80);
  const device2 = new Electricdevice('Computer', 1600);
  const device3 = new Electricdevice('Blender', 1000);
  
  
  
  console.log('hello');
  
  
  //Определите родительскую функцию с методами, которые включают/ выключают прибор из розетки
  
  function Switching() {
    let enabled = false;
  
    this.enable = function() {
      enabled = true;
    };
  
    this.disable = function() {
      enabled = false;
    };
  }
  
  //Создайте делегирующую связь[[Prototype]]для двух конкретных приборов.
  
  function Lamp(power) {
    Switching.call(this);
    
    let power = 0;
    
    this.setPowerAmount = function(amount) {
      power = amount;
    };
  }
  
  
  // Создайте экземпляры каждого прибора.
  
  let lamp1 = new Lamp(1000);
  
  // lamp1.enable();
  console.log(lamp1.setPowerAmount(1000));
  
  //У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.