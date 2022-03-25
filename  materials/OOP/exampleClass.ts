class Rechtangle {
  width;
  height;

  constructor(widthInt, heightInt) {
    this.width = widthInt;
    this.height = heightInt;
  }

  caclArea() {
    return this.width + this.height;
  }
}

const rect = new Rechtangle(5, 10);