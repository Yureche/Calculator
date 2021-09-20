// ! Define Variabels
const currentOperation = document.querySelector(".current-operation");
const previousOperation = document.querySelector(".previous-operation");
let operator;
let firstNumber;

// * Buttons
// Numbers
const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
// Operators
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide")
// Other buttons (Clear,Delete, Etc...)
const clearButton = document.querySelector(".clear-all");
const deleteButton = document.querySelector(".delete");
// ! Functions
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2) {
    return num1-num2;
}
function multiply(num1,num2) {
    return num1*num2;
}
function divide(num1,num2) {
    return num1/ num2;
}

// Get number from the input field
function getData() {
    return parseInt(currentOperation.textContent);
}

// ! Event Listeners
// Numbers
button0.addEventListener("click",() => {
    currentOperation.textContent += 0;
});

button1.addEventListener("click",() => {
    currentOperation.textContent += 1;
});

button2.addEventListener("click",() => {
    currentOperation.textContent += 2;
});

button3.addEventListener("click",() => {
    currentOperation.textContent += 3;
});

button4.addEventListener("click",() => {
    currentOperation.textContent += 4;
});

button5.addEventListener("click",() => {
    currentOperation.textContent += 5;
});

button6.addEventListener("click",() => {
    currentOperation.textContent += 6;
});

button7.addEventListener("click",() => {
    currentOperation.textContent += 7;
});

button8.addEventListener('click', () => {
    currentOperation.textContent += 8;
});

button9.addEventListener("click",() => {
    currentOperation.textContent += 9;
});

// Operators
addButton.addEventListener("click",() => {
    operator = "+";
    firstNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator;
})

subtractButton.addEventListener("click",() => {
    operator = "-";
    firstNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator;
})

multiplyButton.addEventListener("click",() => {
    operator = "*";
    firstNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator;
})

divideButton.addEventListener("click",() => {
    operator = "/";
    firstNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator;
})

// Clear and Delete buttons
clearButton.addEventListener("click",() => {
    previousOperation.textContent = undefined;
    currentOperation.textContent = 0;
    firstNumber = undefined;
    operator = undefined;
})

deleteButton.addEventListener("click",() => {
    currentOperation.textContent = Math.floor(parseInt(currentOperation.textContent) / 10)
})


