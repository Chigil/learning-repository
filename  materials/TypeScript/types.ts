const num: number = 1;
const str: string = 'dada';
const bool: boolean = false;

const numArray: number[] = [1, 2, 3, 4, 5, 6];
const numArray2: Array<number> = [1, 2, 3, 4, 5, 6];

const words: string[] = ['host', 'server', 'datra'];

let variable: any = 'some';
variable = []; //not error - any;

function sayName(name: string): void {
  console.log(name);
}

sayName('Daddy');
