interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number,
    height: number
  }
}

const rect: Rect = {
  id: 'aadwdw',
  size: {
    width: 20,
    height: 30,
  },
  color: '#ccc',
}
// rect.id = '1232' error
const rect1 = <Rect>{}

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect2: RectWithArea = {
  id: '122',
  size: {
    width: 15,
    height: 15,
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

interface IClock {
  time: Date

  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

interface Styles {
  [key: string]: string
}
const css: Styles = {
  background: 'black',
}