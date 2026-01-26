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
sayHelloLater(printMessage);
//# sourceMappingURL=callbacks.js.map