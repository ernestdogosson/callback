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
const main = (word, callback) => {
    return callback(word);
};
const toUpper = (text) => {
    return text.toUpperCase();
};
const result = main("ernest", toUpper);
// console.log(result);
// 5
const pizzaOrder = (showStatus) => {
    console.log("Preparing food...");
    setTimeout(() => {
        const status = "Your pizza is ready.";
        showStatus(status);
    }, 3000);
};
const showStatus = (status) => {
    console.log(status);
};
pizzaOrder(showStatus);
//# sourceMappingURL=callbacks.js.map