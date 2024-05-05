function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, n2, operator) {
    return window[operator](n1, n2);
}

let number1 = 2;
let number2 = 3;
let operator = 'add';

console.log(operate(number1,number2, operator));