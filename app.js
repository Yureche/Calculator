// ! Define Variabels
const currentOperation = document.querySelector(".current-operation");
const previousOperation = document.querySelector(".previous-operation");
let operator;
let firstNumber;
let secondNumber;

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
const equalsButton = document.querySelector(".equals");

// ! Functions
function operate(num1,num2,operator) {
    switch (operator) {
        case "+": 
            return num1+num2;
            break;
        case "-": 
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break;
        
    }
}

// Get number from the input field
function getData() {
    return parseInt(currentOperation.textContent);
}

function isZero() {
    if (parseInt(currentOperation.textContent) === 0) {
        currentOperation.textContent = undefined;
    }
}

// ! Event Listeners
// Numbers
button0.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 0;
});

button1.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 1;
});

button2.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 2;
});

button3.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 3;
});

button4.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 4;
});

button5.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 5;
});

button6.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 6;
});

button7.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 7;
});

button8.addEventListener('click', () => {
    isZero()
    currentOperation.textContent += 8;
});

button9.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 9;
});

// Operators
addButton.addEventListener("click",() => {
    operator = "+";
    firstNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator;
    currentOperation.textContent = "0";
})

subtractButton.addEventListener("click",() => {
    operator = "-";
    firstNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator;
    currentOperation.textContent = "0";
})

multiplyButton.addEventListener("click",() => {
    operator = "*";
    firstNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator;
    currentOperation.textContent = "0";
})

divideButton.addEventListener("click",() => {
    operator = "/";
    firstNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator;
    currentOperation.textContent = "0";
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

// Equals button
equalsButton.addEventListener("click",() => {
    secondNumber = getData();
    previousOperation.textContent = firstNumber+ " " + operator + " " + secondNumber + " " + "=";
    currentOperation.textContent = parseInt(operate(firstNumber, secondNumber, operator));
})


