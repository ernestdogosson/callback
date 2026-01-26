// 1
type printGrettingsFunc = (message: string) => void;
const greetings = (printGrettings: printGrettingsFunc): void => {
  const message: string = "Hello from callback!";
  printGrettings(message);
};

const printGrettings = (message: string): void => {
  console.log(message);
};

greetings(printGrettings);
