"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greetings = (printGrettings) => {
    const message = "Hello from callback!";
    printGrettings(message);
};
const printGrettings = (message) => {
    console.log(message);
};
const sayHelloLater = (printMessage) => {
    setTimeout(() => {
        const message = "Hi, I am late!";
        printMessage(message);
    }, 2000);
};
const printMessage = (message) => {
    console.log(message);
};
const addNumber = (a, b, printResult) => {
    const result = a + b;
    printResult(result);
};
const printResult = (result) => {
    console.log(result);
};
addNumber(10, 15, printResult);
//# sourceMappingURL=callbacks.js.map