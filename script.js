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
    if (n2 == 0) {
        alert("Can't divide by 0.");
        return n1;
    }
    return Math.round((n1 / n2) * 100) / 100;
}

function operate(n1, n2, operator) {
    return window[operator](n1, n2);
}

function countString(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

function clicked(click_id) {
    display = document.getElementById("display");
    if (click_id =="clear") {
        display.textContent = 0;
        return;
    }
    if (click_id =="arrow") {
        display.textContent = display.textContent.slice(0, -1);
        return;
    }
    if (click_id == '+' || click_id == '-' || click_id == '*' || click_id == '/') {
        if (countString(display.textContent, "+") > 0 || countString(display.textContent, "-") > 0 || 
        countString(display.textContent, "*") > 0 || countString(display.textContent, "/") > 0) {         
            equals();
        } 
    }
    if (display.textContent == 0) {
        display.textContent = click_id;
    } else {
        display.textContent += click_id;
    }
    
}

function equals() {
    let display = document.getElementById("display").textContent;
    if (display.includes("+")) {
        const values = display.split("+");
        document.getElementById("display").textContent = String(operate(Number(values[0]),Number(values[1]),"add"));
    } else if (display.includes("-")){
        const values = display.split("-");
        document.getElementById("display").textContent = String(operate(Number(values[0]),Number(values[1]),"subtract"));
    } else if (display.includes("*")){
        const values = display.split("*");
        document.getElementById("display").textContent = String(operate(Number(values[0]),Number(values[1]),"multiply"));
    } else if (display.includes("/")){
        const values = display.split("/");
        document.getElementById("display").textContent = String(operate(Number(values[0]),Number(values[1]),"divide"));
    } 
    
}

let number1 = 2;
let number2 = 3;
let operator = 'add';
let screen = 0;

console.log(operate(number1,number2, operator));
