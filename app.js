// ! Define Variabels
const currentOperation = document.querySelector(".current-operation");
const previousOperation = document.querySelector(".previous-operation");
let operator = null; // Operator
let firstNumber = null; // Numbers to calculate the result
let secondNumber = null;
let number = ""; // To store the current input and then push it into the array
let arr = []; // Array to store the numbers and  the operations before calculating
isEqualsPressed = false; 
let operators = ["+" , "-" , "*", "/"];
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
// Function to calculate and return a number using 2 number and an operator,
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
// Calculate all the number in the array using the operate() function.
function getResult(array) {
    arr.push(parseFloat(currentOperation.textContent)); // Push last entered number into the array
    currentOperation.textContent = null; 
    // Looping trough the array and defining the first number, second number and the operator.
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
        previousOperation.textContent = arr.join(" ")
        previousOperation.textContent += " ="
         // Checking if the number is a fload and long, if yes, make it shorter
        if ((firstNumber+"").includes(".") && (firstNumber.length >= 10)) {
            currentOperation.textContent = firstNumber.toPrecision(7);
        }
        else {
            currentOperation.textContent = firstNumber;
        }
}
// Get number from the input field
function getData() {
    return parseFloat(currentOperation.textContent);
}


function isEmpty() {  // Checking if the array of inputs is empty
    if (arr.length === 0) {
        return true;
    }
    return false;
}

function isZero() {
    if (currentOperation.textContent === '0') {
        currentOperation.textContent = undefined;
    }
}

// ! Event Listeners
// Numbers
button0.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 0;
    number += "0";
});

button1.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 1;
    number += "1";
});

button2.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 2;
    number += "2";
});

button3.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 3;
    number += "3";
});

button4.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 4;
    number += "4";
});

button5.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 5;
    number += "5";
});

button6.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 6;
    number += "6";
});

button7.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 7;
    number += "7";
});

button8.addEventListener('click', () => {
    isZero();
    currentOperation.textContent += 8;
    number += "8";
});

button9.addEventListener("click",() => {
    isZero();
    currentOperation.textContent += 9;
    number += "9";
});

// Operators
addButton.addEventListener("click",() => {
    if (isEqualsPressed) {
        arr = [];
        number = firstNumber;
        firstNumber = null;
        isEqualsPressed = false;
    }
    if (number === "") {
        return;
    }
    arr.push(parseFloat(number));
    if(operators.includes( arr.at(-1))  || number === "") {
        return;
    }
    number = "";
    arr.push("+")
    previousOperation.textContent = arr.join(" ")
    currentOperation.textContent = 0;
})

subtractButton.addEventListener("click",() => {
    if (isEqualsPressed) {
        arr = [];
        number = firstNumber;
        firstNumber = null;
        isEqualsPressed = false;
    }
    if (number === "") {
        return;
    }
    arr.push(parseFloat(number));
    if(operators.includes( arr.at(-1))  || number === "") {
        return;
    }
    number = "";
    arr.push("-")
    previousOperation.textContent = arr.join(" ")
    currentOperation.textContent = 0;
})

multiplyButton.addEventListener("click",() => {
    if (isEqualsPressed) {
        arr = [];
        number = firstNumber;
        firstNumber = null;
        isEqualsPressed = false;
    }
    if (number === "") {
        return;
    }
    arr.push(parseFloat(number));
    if(operators.includes( arr.at(-1))  || number === "") {
        return;
    }
    number = "";
    arr.push("*")
    previousOperation.textContent = arr.join(" ")
    currentOperation.textContent = 0;
})

divideButton.addEventListener("click",() => {
    if (isEqualsPressed) {
        arr = [];
        number = firstNumber;
        firstNumber = null;
        isEqualsPressed = false;
    }
    if (number === "") {
        return;
    }
    arr.push(parseFloat(number));
    if(operators.includes( arr.at(-1))  || number === "") {
        return;
    }
    number = "";
    arr.push("/")
    previousOperation.textContent = arr.join(" ")
    currentOperation.textContent = 0;
})

// Clear and Delete buttons 
clearButton.addEventListener("click",() => {
    previousOperation.innerHTML ="&#8203;";
    currentOperation.textContent = undefined;
    firstNumber = null;
    operator = null;
    number = "";
    arr = [];
    isEqualsPressed = false;
})

deleteButton.addEventListener("click",() => {
    currentOperation.textContent = currentOperation.textContent.slice(0,-1);
})

// Equals button
equalsButton.addEventListener("click",() => {
    if (arr.length === 0) {
        return;
    }
    if (!isEqualsPressed) {
        getResult(arr);
    }
    isEqualsPressed = true;
})

// Dot / Float Button
dotButton.addEventListener("click",() => {
    if (currentOperation.textContent.includes(".")  || currentOperation.textContent === "") {
        return;
    }
    currentOperation.textContent += ".";
    number += ".";
})




