"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greetings = (printGrettings) => {
    const message = "Hello from callback!";
    printGrettings(message);
};
const printGrettings = (message) => {
    console.log(message);
};
greetings(printGrettings);
//# sourceMappingURL=callbacks.js.map