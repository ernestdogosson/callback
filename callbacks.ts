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
// console.log(result);

// 5
const pizzaOrder = (showStatus: (status: string) => void): void => {
  console.log("Preparing food...");
  setTimeout(() => {
    const status: string = "Your pizza is ready.";
    showStatus(status);
  }, 3000);
};

const showStatus = (status: string): void => {
  console.log(status);
};

// pizzaOrder(showStatus);

// 6
const repeat3x = (callback: (message: string) => void): void => {
  callback("Insert you card to pay please!");

  setTimeout(() => {
    callback("Processing payment...");
  }, 2000);

  setTimeout(() => {
    callback("Payment succesfull.");
  }, 4000);
};

const showMessage = (message: string): void => {
  console.log(message);
};

// repeat3x(showMessage);

// 7
const downloadFile = (url: string, onCall: (msg: string) => void): void => {
  setTimeout(() => {
    const msg: string = `Downloaded data from: ${url}`;
    onCall(msg);
  }, 2000);
};

const showDownlaod = (msg: string): void => {
  console.log(msg);
};

// downloadFile("https://loadsofthings@example.com", showDownlaod);

// 8
type chance = () => void;

const mainFunc = (n: number, success: chance, error: chance): void => {
  n = Math.random();
  n < 0.5 ? success() : error();
};

const success = () => {
  console.log("success");
};

const error = () => {
  console.log("error");
};

// mainFunc(5, success, error);

// 9
type Operator = "add" | "subtract" | "multiply" | "divide";

const calculator = (
  a: number,
  b: number,
  operator: Operator,
  onResult: (result: number) => void,
): void => {
  const operations: Record<Operator, (a: number, b: number) => number> = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  const result = operations[operator](a, b);
  onResult(result);
};

const showResult = (result: number): void => {
  console.log(result);
};

calculator(8, 2, "add", showResult);
calculator(8, 2, "subtract", showResult);
calculator(8, 2, "multiply", showResult);
calculator(8, 2, "divide", showResult);
