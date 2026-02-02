// Challenge 1
// const addTwo = (a: number): number => {
//   return a + 2;
// };

// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
const addS = (word: string): string => {
  return word + "s";
};

console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
const map = (arr: number[], callback: (a: number) => number): number[] => {
  const newArr: number[] = [];

  arr.forEach((a) => {
    newArr.push(callback(a));
  });
  return newArr;
};

const addTwo = (a: number): number => {
  return a + 2;
};

console.log(map([1, 2, 3], addTwo));

// Challenge 4
let alphabet = "";
const letters = ["a", "b", "c", "d"];

const forEach = (letters: string[], callback: (a: string) => void): void => {
  for (const letter of letters) {
    callback(letter);
  }
};

const printAlphabet = (char: string): void => {
  alphabet += char;
};

forEach(letters, printAlphabet);
console.log(alphabet);

// Challenge 5

const mapWith = (arr: number[], callback: (a: number) => number): void => {
  const newArry: number[] = [];
};

// Challenge 6
const nums = [4, 1, 3];

type Operator = "add" | "subtarct" | "multiply" | "divide";

const reduce = (array: number[], operator: Operator, n: number): number => {
  const operations: Record<Operator, (a: number, b: number) => number> = {
    add: (a, b) => a + b,
    subtarct: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  let result: number = n;
  for (const i of array) {
    result = operations[operator](result, i);
  }
  return result;
};

console.log(reduce([4, 1, 3], "add", 0));

// 8
const intersection = (...superArray: number[][]) => {
  const intersectArray: number[] = [];

  superArray[0]?.forEach((a) => {
    if (superArray.every((array) => array.includes(a))) {
      intersectArray.push(a);
    }
  });
  return intersectArray;
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]),
);
