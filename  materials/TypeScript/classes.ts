class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {
  }
}