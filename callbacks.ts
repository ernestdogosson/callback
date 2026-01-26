// 1
type printGrettingsFunc = (message: string) => void;

const greetings = (printGrettings: printGrettingsFunc): void => {
  const message: string = "Hello from callback!";
  printGrettings(message);
};

const printGrettings = (message: string): void => {
  console.log(message);
};

// greetings(printGrettings);

// 2
type printMessageFunc = (message: string) => void;

const sayHelloLater = (printMessage: printGrettingsFunc): void => {
  setTimeout(() => {
    const message: string = "Hi, I am late!";
    printMessage(message);
  }, 2000);
};

const printMessage = (message: string): void => {
  console.log(message);
};

// sayHelloLater(printMessage);

// 3
type printResultFunc = (result: number) => void;

const addNumber = (
  a: number,
  b: number,
  printResult: printResultFunc,
): void => {
  const result: number = a + b;
  printResult(result);
};

const printResult = (result: number): void => {
  console.log(result);
};

// addNumber(10, 15, printResult);

// 4
type toUpperFunc = (text: string) => string;

const main = (word: string, callback: toUpperFunc): string => {
  return callback(word);
};

const toUpper = (text: string) => {
  return text.toUpperCase();
};

const result = main("ernest", toUpper);
console.log(result);
