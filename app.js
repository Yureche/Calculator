// ! Define Variabels
const currentOperation = document.querySelector(".current-operation");
const previousOperation = document.querySelector(".previous-operation");
let operator = null; // Operator
let firstNumber = null; // Numbers to calculate the result
let secondNumber = null;
let number = ""; // To store the current input and then push it into the array
let arr = []; // Array to store the numbers and  the operations before calculating

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
const dotButton = document.querySelector(".dot");

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
// Get the result from the array
function getResult(array) {
    arr.push(parseFloat(number));
    for (let i = 0; i < array.length; i++) {        
        if (firstNumber === null) {
            firstNumber = array[i];
        }
        else if (operator === null) {   
            operator = array[i];
        }
        else if (secondNumber === null) {
            secondNumber = array[i];
        }

        if (firstNumber !== null && secondNumber !== null && operator !== null) {
            firstNumber = operate(firstNumber,secondNumber, operator);
            operator = null;
            secondNumber = null;
        }
    }
        result = firstNumber;
        previousOperation.textContent = arr.join(" ")
        previousOperation.textContent += " ="
        currentOperation.textContent = result;
}
// Get number from the input field
function getData() {
    return parseFloat(currentOperation.textContent);
}

function isZero() {
    if (currentOperation.textContent === 0  || currentOperation.textContent === "0") {
        currentOperation.textContent = undefined;
    }
}

// ! Event Listeners
// Numbers
button0.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 0;
    number += "0";
});

button1.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 1;
    number += "1";
});

button2.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 2;
    number += "2";
});

button3.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 3;
    number += "3";
});

button4.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 4;
    number += "4";
});

button5.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 5;
    number += "5";
});

button6.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 6;
    number += "6";
});

button7.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 7;
    number += "7";
});

button8.addEventListener('click', () => {
    isZero()
    currentOperation.textContent += 8;
    number += "8";
});

button9.addEventListener("click",() => {
    isZero()
    currentOperation.textContent += 9;
    number += "9";
});

// Operators
addButton.addEventListener("click",() => {
    arr.push(parseFloat(number));
    number = "";
    arr.push("+")
    previousOperation.textContent = arr.join(" ")
    currentOperation.textContent = "0";
})

subtractButton.addEventListener("click",() => {
    arr.push(parseFloat(number));
    number = "";
    arr.push("-")
    previousOperation.textContent = arr.join(" ")
    currentOperation.textContent = "0";
})

multiplyButton.addEventListener("click",() => {
    arr.push(parseFloat(number));
    number = "";
    arr.push("*")
    previousOperation.textContent = arr.join(" ")
    currentOperation.textContent = "0";
})

divideButton.addEventListener("click",() => {
    arr.push(parseFloat(number));
    number = "";
    arr.push("/")
    previousOperation.textContent = arr.join(" ")
    currentOperation.textContent = "0";
})

// Clear and Delete buttons 
clearButton.addEventListener("click",() => {
    previousOperation.innerHTML ="&#8203;";
    currentOperation.textContent = 0;
    firstNumber = undefined;
    operator = undefined;
    number = "";
    arr = [];
})

deleteButton.addEventListener("click",() => {
    currentOperation.textContent = Math.floor(parseInt(currentOperation.textContent) / 10)
})

// Equals button
equalsButton.addEventListener("click",() => {
    if (arr.length === 0) {
        return;
    }
    getResult(arr);
})

// Dot / Float Button
dotButton.addEventListener("click",() => {
    if ((currentOperation.textContent.slice(-1)) === ".") {
        return;
    }
    currentOperation.textContent += ".";
})




