/* npx ts-node test.ts */

/* 
Arrays: 2 options:
*/

const aName: string = 'name name'
const names: string[] = aName.split(" ");
const myNames: Array<string> = aName.split(" ");
const newNames: Array<string | number> = aName.split(" ");

/* 
Object: option #1: interface
*/
interface Obj {
  prop1: string,
  prop2: string,
}

const newObj: Obj = {
  prop1: 'x',
  prop2: 'x'
}
/* 
Object: option #2:  Utility Type: a Records (defining key type and value type)
*/

const ids: Record<number | string, string> = {
  10: 's'
}

// console.log(ids['c'] == null)

/* defining funtions */

function addNumbers(a: number, b: number): number {
  return a + b
};


const addStrings = (c: string, d: string = 'defaultValue'): string => `${c}${d}`;

/* union types */
const format = (title: string, param: string | number): string => `${title} ${param}`

/* void function */

const printFormat = (title: string, param: string | number): void => {
  console.log(title, param)
}

/* promise function */

const fetchData = (url: string): Promise<string> => Promise.resolve('resolved')

/* rest param */
const introduce = (salutation: string, ...names: Array<string>): string => `${salutation} ${names.join(" ")}`


/* Function as Type */
type MutationFunction = (v: number) => number

function printToFile(text: string, callback: Function): void {
  console.log(text);
  callback()
}

function arrayMutate(numbers: Array<number>, mutate: MutationFunction): Array<number> {
  return numbers.map(mutate);
}

// console.log(arrayMutate([1, 2, 3], (v) => v * 10));

/* return a function */
type AdderFunction = (val: number) => number;

function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}


interface StringNumberPair {
  // specialized properties
  length: 2;
  0: string;
  1: number;

  // Other 'Array<string | number>' members...
  slice(start?: number, end?: number): Array<string | number>;

  special(prop: string): string
}

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}


type ConstructSignature = {
  new (_type: string, _num: number): string[]
}

function fn(ctor: ConstructSignature) {
  return new ctor('hello', 2)
}
