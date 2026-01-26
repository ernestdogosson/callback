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

sayHelloLater(printMessage);
