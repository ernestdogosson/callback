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
// pizzaOrder(showStatus);
// 6
const repeat3x = (callback) => {
    callback("Insert you card to pay please!");
    setTimeout(() => {
        callback("Processing payment...");
    }, 2000);
    setTimeout(() => {
        callback("Payment succesfull.");
    }, 4000);
};
const showMessage = (message) => {
    console.log(message);
};
// repeat3x(showMessage);
// 7
const downloadFile = (url, onCall) => {
    setTimeout(() => {
        const msg = `Downloaded data from: ${url}`;
        onCall(msg);
    }, 2000);
};
const showDownlaod = (msg) => {
    console.log(msg);
};
const mainFunc = (n, success, error) => {
    n = Math.random();
    n < 0.5 ? success() : error();
};
const success = () => {
    console.log("success");
};
const error = () => {
    console.log("error");
};
const calculator = (a, b, operator, onResult) => {
    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
    };
    const result = operations[operator](a, b);
    onResult(result);
};
const showResult = (result) => {
    console.log(result);
};
calculator(8, 2, "add", showResult);
calculator(8, 2, "subtract", showResult);
calculator(8, 2, "multiply", showResult);
calculator(8, 2, "divide", showResult);
//# sourceMappingURL=callbacks.js.map