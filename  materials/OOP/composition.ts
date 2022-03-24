class Freshener {

}

class Car {
  engine: Engine;
  wheels: Wheel[];
  freshener: Freshener;

  constructor(freshener) {
    // agrigation
    this.freshener = freshener;
    // composition
    this.engine = new Engine();
    this.wheels.push((new Wheel()));
    this.wheels.push((new Wheel()));
    this.wheels.push((new Wheel()));
    this.wheels.push((new Wheel()));
  }

  // delegation
  drive() {
    this.engine.drive();
    for (let i = 0; i < this.wheels.length; i++) {
      this.wheels[i].drive()
    }
  }

}

class Engine {
  drive() {
    console.log('Двигатель работает')
  }

}

class Wheel {
  drive() {
    console.log('Колёса едут')
  }
}

